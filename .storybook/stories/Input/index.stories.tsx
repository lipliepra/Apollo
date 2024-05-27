import type {
    Meta,
    StoryObj,
} from '@storybook/react';

import { Input } from '../../../src';
import { IInputWithSkeletonProps } from '../../../src/components/Input/types';

const meta: Meta<IInputWithSkeletonProps> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент инпута' } } },
    args: {
        placeholder: 'Введите значение',
    },
    argTypes: {
        value: { control: 'text' },
        onChange: { control: false },
        onFocus: { control: false },
        onBlur: { control: false },
        reactRef: { control: false },
        changeFormat: { control: false },
    },
};

export default meta;

type TStory = StoryObj<IInputWithSkeletonProps>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const InputReadonlyWithoutValue: TStory = {
    name: 'Компонент в режиме чтения (без введённого значения)',
    args: {
        isReadonly: true,
        emptyCaption: 'Поле не заполнено',
    },
};

export const InputReadonlyWithValue: TStory = {
    name: 'Компонент в режиме чтения (с введённым значением)',
    args: {
        isReadonly: true,
        value: 'Контент с введённым значением',
    },
};

export const InputReadonlyWithHidden: TStory = {
    name: 'Компонент в режиме чтения (С скрытием введённого значения)',
    args: {
        isReadonly: true,
        value: 'Контент с введённым значением',
        withHiddenValue: true,
    },
};

export const InputWithSkeleton: TStory = {
    name: 'Скелетон инпута',
    args: { isShowSkeleton: true },
};
