import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import {
    Icon,
    ICONS,
} from '../../../src';
import { IIconWithSkeletonProps } from '../../../src/components/Icon/types';

const meta: Meta<IIconWithSkeletonProps> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент иконки' } } },
    args: {
        path: ICONS.EmptyImage,
        dataTestId: 'dataTestId',
    },
    argTypes: {
        path: {
            control: 'select',
            options: Object.keys(ICONS),
            mapping: ICONS,
        },
        reactRef: { control: false },
    },
};

export default meta;

type TStory = StoryObj<IIconWithSkeletonProps>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const SmallIcons: TStory = {
    name: 'Иконки стандартного размера',
    render: (props) => (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                maxWidth: '938px',
            }}
        >
            {Object.values(ICONS).map((icon, index) => (
                <Icon
                    key={index}
                    {...props}
                    path={icon}
                />
            ))}
        </div>
    ),
};

export const LargeIcons: TStory = {
    name: 'Иконки большого размера',
    args: { isLarge: true },
    render: (props) => (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                maxWidth: '938px',
            }}
        >
            {Object.values(ICONS).map((icon, index) => (
                <Icon
                    key={index}
                    {...props}
                    path={icon}
                />
            ))}
        </div>
    ),
};

export const Active: TStory = {
    name: 'Активная иконка',
    args: {
        isActive: true,
        path: ICONS.Plus,
    },
};

export const Loading: TStory = {
    name: 'Иконка загрузки',
    args: {
        isActive: true,
        isLoading: true,
        path: ICONS.Loader,
    },
};

export const Skeleton: TStory = {
    name: 'Скелетон',
    args: { isShowSkeleton: true },
};
