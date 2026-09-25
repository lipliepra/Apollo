import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { dirname, join, normalize } from 'node:path';

const pkg = JSON.parse(await readFile('package.json', 'utf8'));
const [pack] = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], { encoding: 'utf8' }));
const files = new Set(pack.files.map(({ path }) => path));
const checkExport = (value) => {
    if (typeof value === 'object') return Object.values(value).forEach(checkExport);
    assert(files.has(value.replace(/^\.\//, '')), `Missing export: ${value}`);
};
Object.values(pkg.exports).forEach(checkExport);
for (const path of [pkg.main, pkg.module, pkg.types]) checkExport(path);
assert.equal(pkg.type, 'module');
assert(pkg.sideEffects.includes('**/*.css'));
assert([...files].every((file) => file.startsWith('dist/') || ['package.json', 'README.md', 'LICENSE'].includes(file)), 'Unexpected archive contents');
for (const file of files) {
    if (!file.endsWith('.css')) continue;
    const css = await readFile(file, 'utf8');
    assert(!/@import\b/.test(css), `Unresolved CSS import: ${file}`);
    for (const [, url] of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
        if (url.startsWith('data:') || url.startsWith('#')) continue;
        assert(files.has(normalize(join(dirname(file), url))), `Missing or remote resource: ${url}`);
    }
}
console.log(`Package OK: ${files.size} files, public exports and CSS resources checked.`);
