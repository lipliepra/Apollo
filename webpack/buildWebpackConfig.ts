import { Configuration } from 'webpack';
import { buildExternals } from './buildExternals';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/types';

export function buildWebpackConfig(options: IBuildOptions): Configuration {
    const {
        paths,
        mode,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'index.js',
            path: paths.build,
            libraryTarget: 'umd',
            clean: true,
        },
        resolve: buildResolvers(),
        externals: buildExternals(),
        module: {
            rules: buildLoaders(),
        },
    } as Configuration;
}
