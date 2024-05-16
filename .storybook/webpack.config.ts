import path from 'path';
import { RuleSetRule } from 'webpack';
import { WebpackConfiguration } from 'webpack-cli';

export const webpackConfig = (config: WebpackConfiguration) => {
    const paths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config!.module!.rules as Array<RuleSetRule>;

    config!.module!.rules = rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    config!.module!.rules!.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules!.push({
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    });

    return config;
};
