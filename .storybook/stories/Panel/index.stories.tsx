import {
    Meta,
    StoryObj,
} from '@storybook/react';

import {
    CFC,
    Panel,
} from '../../../src';
import { IPanelProps } from '../../../src/components/Panel/types';

const meta: Meta<CFC<IPanelProps>> = {
    title: 'Components/Panel',
    component: Panel,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент панели' } } },
    args: {
        children: 'Тут может расположиться любой контент',
    },
    argTypes: {},
};

export default meta;

type TStory = StoryObj<CFC<IPanelProps>>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

