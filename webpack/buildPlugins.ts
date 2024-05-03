import CopyPlugin from 'copy-webpack-plugin';

export const buildPlugins = () => [
    new CopyPlugin({
        patterns: [
            {
                from: 'src/assets/fonts',
                to: 'src/assets/fonts',
            },
        ],
    }),
];
