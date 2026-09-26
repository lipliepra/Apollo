import { cp, writeFile } from 'node:fs/promises';
import { compile } from 'sass';

for (const entry of ['styles', 'reset', 'fonts']) {
    const { css } = compile(`src/${entry}.scss`, { style: 'compressed', charset: false });
    await writeFile(`dist/${entry}.css`, css);
}

// Preserve relative imports so consumers can use mixins without emitting global CSS.
await cp('src/scss', 'dist/scss', { recursive: true });

// Keep URLs relative to the emitted CSS so apps can serve assets under any base path.
await cp('src/assets/fonts', 'dist/assets/fonts', { recursive: true });
