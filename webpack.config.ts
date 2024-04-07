import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './webpack/buildWebpackConfig';
import { IBuildPaths } from './webpack/types/types';

export default () => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'dist'),
    };

    const mode = 'production';

    return buildWebpackConfig({
        mode,
        paths,
    }) as webpack.Configuration;
};
