import { cp, writeFile } from 'node:fs/promises';
import { compile } from 'sass';

for (const entry of ['styles', 'reset']) {
    const { css } = compile(`src/${entry}.scss`, { style: 'compressed', charset: false });
    await writeFile(`dist/${entry}.css`, css);
}

// Preserve relative imports so consumers can use mixins without emitting global CSS.
await cp('src/scss', 'dist/scss', { recursive: true });
