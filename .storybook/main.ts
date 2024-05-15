import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
    stories: ['../.storybook/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: (config) => {
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
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
};
export default config;
