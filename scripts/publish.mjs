import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== '--dry-run')) {
    throw new Error('Usage: node scripts/publish.mjs [--dry-run]');
}
const dryRun = args[0] === '--dry-run';
if (!dryRun && !process.env.NPM_TOKEN) {
    throw new Error('NPM_TOKEN is required to publish.');
}
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
if (pkg.private) throw new Error('This package is marked private.');
const { registry, access } = pkg.publishConfig ?? {};
if (registry !== 'https://registry.npmjs.org/' || access !== 'public') {
    throw new Error('Expected public npmjs publication settings in package.json.');
}
const archives = (await readdir('artifacts')).filter((name) => name.endsWith('.tgz'));
if (archives.length !== 1) throw new Error('Expected exactly one verified archive in artifacts/.');

const temp = await mkdtemp(join(tmpdir(), 'apollo-publish-'));
try {
    const config = join(temp, '.npmrc');
    // Keep the token in the runtime environment; never write its value to disk.
    await writeFile(config, dryRun ? '' : '//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n', { mode: 0o600 });
    const env = { ...process.env, NPM_CONFIG_USERCONFIG: config };
    if (dryRun) {
        delete env.NPM_TOKEN;
        delete env.NPM_CONFIG_OTP;
    }
    console.log(`${dryRun ? 'Dry run' : 'Publishing'}: ${pkg.name}@${pkg.version} → ${registry} (${access})`);
    const result = spawnSync('npm', [
        'publish', resolve('artifacts', archives[0]),
        '--ignore-scripts', '--registry', registry, '--access', access,
        ...(process.env.NPM_TAG ? ['--tag', process.env.NPM_TAG] : []),
        ...(dryRun ? ['--dry-run', '--offline'] : []),
    ], { stdio: 'inherit', env });
    if (result.error) throw result.error;
    process.exitCode = result.status ?? 1;
} finally {
    await rm(temp, { recursive: true, force: true });
}
