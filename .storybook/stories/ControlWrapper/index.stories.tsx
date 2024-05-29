import type {
    Meta,
    StoryObj,
} from '@storybook/react';

import {
    CFC,
    ControlWrapper,
    Input,
} from '../../../src';
import { IControlWrapperProps } from '../../../src/components/ControlWrapper/types';
import { INPUT_PROPS } from './constants';

const meta: Meta<CFC<IControlWrapperProps>> = {
    title: 'Components/ControlWrapper',
    component: ControlWrapper,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент обертки поля' } } },
    args: {
        label: 'Заголовок',
        dataTestId: 'dataTestId',
        children: <Input {...INPUT_PROPS} />,
    },
    argTypes: {
        reactRef: { control: false },
        children: { control: false },
    },
};

export default meta;

type TStory = StoryObj<IControlWrapperProps>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };
