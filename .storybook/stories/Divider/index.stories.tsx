import type {
    Meta,
    StoryObj,
} from '@storybook/react';

import { Divider } from '../../../src';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент разделитель' } } },

};

export default meta;

type TStory = StoryObj<typeof Divider>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };
