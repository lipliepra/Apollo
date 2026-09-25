import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const run = (command, args, cwd) => execFileSync(command, args, { cwd, stdio: 'inherit' });
const temp = await mkdtemp(join(tmpdir(), 'apollo-consumer-'));
const pack = () => JSON.parse(execFileSync('npm', ['pack', '--json', '--ignore-scripts', '--pack-destination', temp], { encoding: 'utf8' }))[0];
try {
    const first = pack();
    run('npm', ['run', 'build']);
    const second = pack();
    assert.equal(first.integrity, second.integrity, 'Package changed between consecutive clean builds');
    const consumer = join(temp, 'consumer');
    await cp('checks/consumer', consumer, { recursive: true });
    // The repository config resolves sources for the editor. The isolated check
    // must resolve only the installed archive, without source aliases.
    await cp(join(consumer, 'tsconfig.package.json'), join(consumer, 'tsconfig.json'));
    run('npm', ['ci', '--no-audit', '--no-fund'], consumer);
    run('npm', ['install', '--no-save', '--package-lock=false', '--ignore-scripts', '--no-audit', '--no-fund', join(temp, second.filename)], consumer);
    // Import the installed ESM entry without access to the repository sources.
    run('node', ['--input-type=module', '-e', 'await import("@d.story/apollo-ui")'], consumer);
    run('npm', ['exec', '--', 'tsc', '--noEmit'], consumer);
    run('npm', ['exec', '--', 'tsc', '--noEmit', '--module', 'NodeNext', '--moduleResolution', 'NodeNext'], consumer);
    run('npm', ['exec', '--', 'vite', 'build'], consumer);
    run('npm', ['ls', 'react', 'react-dom'], consumer);
    assert((await readFile(join(consumer, 'dist/index.html'), 'utf8')).includes('script'));
    console.log('Consumer OK: identical archive from two builds, ESM, Bundler/NodeNext types, CSS import and React 19 production build.');
} finally {
    await rm(temp, { recursive: true, force: true });
}
