import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mock = `#!/usr/bin/env node
const fs = require('node:fs');
const args = process.argv.slice(2);
const config = process.env.NPM_CONFIG_USERCONFIG;
fs.appendFileSync(process.env.APOLLO_TEST_LOG, JSON.stringify({
  args, config,
  auth: config ? fs.readFileSync(config, 'utf8') : undefined,
  hasToken: Boolean(process.env.NPM_TOKEN),
}) + '\\n');
process.exit(Number(process.env.APOLLO_TEST_EXIT || 0));
`;
async function setup(t, command) {
    const dir = await mkdtemp(join(tmpdir(), 'apollo-publish-test-'));
    t.after(() => rm(dir, { recursive: true, force: true }));
    await writeFile(join(dir, command), mock, { mode: 0o755 });
    const log = join(dir, 'calls.jsonl');
    const env = {
        ...process.env, PATH: `${dir}:${process.env.PATH}`,
        NPM_TOKEN: '', NPM_CONFIG_USERCONFIG: '', NPM_CONFIG_OTP: '', NPM_TAG: '',
        APOLLO_TEST_LOG: log, APOLLO_TEST_EXIT: '0',
    };
    const calls = async () => {
        try { return (await readFile(log, 'utf8')).trim().split('\n').map(JSON.parse); }
        catch (error) { if (error.code === 'ENOENT') return []; throw error; }
    };
    return { dir, env, calls };
}
const dude = (args, env) => spawnSync('sh', [join(repo, 'dude.sh'), 'publish', ...args], { env, encoding: 'utf8' });

test('publish requires a token before building; invalid flags are rejected', async (t) => {
    const { env, calls } = await setup(t, 'docker');
    assert.equal(dude([], env).status, 1);
    assert.equal(dude(['--force'], { ...env, NPM_TOKEN: 'test-token' }).status, 1);
    assert.equal(dude(['--dry-run', '--force'], env).status, 1);
    assert.deepEqual(await calls(), []);
});

test('dry run uses a checked release image, no network and no credential forwarding', async (t) => {
    const { env, calls } = await setup(t, 'docker');
    assert.equal(dude(['--dry-run'], env).status, 0);
    const commands = (await calls()).map(({ args }) => args);
    assert.deepEqual(commands, [
        ['build', '--target', 'release', '-t', 'apollo-ui:release', '.'],
        ['run', '--rm', '--init', '--network', 'none', '--env', 'NPM_TAG', 'apollo-ui:release', '--dry-run'],
    ]);
});

test('real publication forwards credential names, never token values in arguments', async (t) => {
    const { env, calls } = await setup(t, 'docker');
    assert.equal(dude([], { ...env, NPM_TOKEN: 'test-token' }).status, 0);
    const commands = (await calls()).map(({ args }) => args);
    assert.deepEqual(commands[1], ['run', '--rm', '--init', '--env', 'NPM_TOKEN', '--env', 'NPM_CONFIG_OTP', '--env', 'NPM_TAG', 'apollo-ui:release']);
    assert(!JSON.stringify(commands).includes('test-token'));
});

test('failed release checks prevent publication', async (t) => {
    const { env, calls } = await setup(t, 'docker');
    assert.equal(dude([], { ...env, NPM_TOKEN: 'test-token', APOLLO_TEST_EXIT: '9' }).status, 9);
    assert.equal((await calls()).length, 1);
});

for (const dryRun of [true, false]) {
    test(`publisher uses the archive, cleans auth config and propagates npm status (dryRun=${dryRun})`, async (t) => {
        const { dir, env, calls } = await setup(t, 'npm');
        await mkdir(join(dir, 'artifacts'));
        await writeFile(join(dir, 'artifacts', 'apollo.tgz'), 'test archive');
        await writeFile(join(dir, 'package.json'), JSON.stringify({
            name: '@d.story/apollo-ui', version: '0.2.1',
            publishConfig: { registry: 'https://registry.npmjs.org/', access: 'public' },
        }));
        const result = spawnSync(process.execPath, [join(repo, 'scripts/publish.mjs'), ...(dryRun ? ['--dry-run'] : [])], {
            cwd: dir, env: { ...env, NPM_TOKEN: 'test-token', NPM_TAG: 'next', APOLLO_TEST_EXIT: '7' }, encoding: 'utf8',
        });
        assert.equal(result.status, 7, result.stderr);
        const [call] = await calls();
        assert.deepEqual(call.args, [
            'publish', join(dir, 'artifacts', 'apollo.tgz'), '--ignore-scripts',
            '--registry', 'https://registry.npmjs.org/', '--access', 'public', '--tag', 'next',
            ...(dryRun ? ['--dry-run', '--offline'] : []),
        ]);
        assert.equal(call.hasToken, !dryRun);
        assert.equal(call.auth, dryRun ? '' : '//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n');
        await assert.rejects(access(call.config), { code: 'ENOENT' });
        assert(!result.stdout.includes('test-token'));
        assert(!result.stderr.includes('test-token'));
    });
}
