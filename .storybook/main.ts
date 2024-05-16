import type { StorybookConfig } from '@storybook/react-webpack5';
import { swc } from './swc';
import { webpackConfig } from './webpack.config';

// @ts-ignore
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
    docs: { defaultName: 'Документация' },
    swc: swc,
    webpackFinal: webpackConfig,
    typescript: { reactDocgen: 'react-docgen-typescript' },
};
export default config;
