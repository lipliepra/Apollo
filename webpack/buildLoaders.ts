import { RuleSetRule } from 'webpack';

export const buildLoaders = (): RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            { loader: 'file-loader' },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
    };

    const svgInlineLoader = {
        test: /\.svg$/,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
            },
        },
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        cssLoader,
        fileLoader,
        svgInlineLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
    ];
};
