import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { PanelHeader } from '../../../src';
import { IPanelHeaderProps } from '../../../src/components/PanelHeader/types';

const meta: Meta<IPanelHeaderProps> = {
    title: 'Components/PanelHeader',
    component: PanelHeader,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент шапки панели' } } },
    args: {
        title: 'Заголовок',
        content: 'Описание',
        withBottomBorder: true,
    },
};

export default meta;

type TStory = StoryObj<IPanelHeaderProps>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

