import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import {
    Icon,
    ICONS,
} from '../../../src';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент иконки' } } },
    args: {
        path: ICONS.EmptyImage,
        dataTestId: 'dataTestId',
    },
    argTypes: {
        path: { control: false },
        onClick: { control: false },
        reactRef: { control: false },
    },
};

export default meta;

type TStory = StoryObj<typeof Icon>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const SmallIcons: TStory = {
    name: 'Иконки стандартного размера',
    render: (props) => (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
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
