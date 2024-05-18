import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import {
    Button,
    ICONS,
} from '../../../src';
import { IButtonWithSkeletonProps } from '../../../src/components/Button/types';

const meta: Meta<IButtonWithSkeletonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент кнопки' } } },
    args: {
        content: 'Контент',
        pattern: 'primary',
        dataTestId: 'dataTestId',
    },
    argTypes: {
        pattern: { control: 'select' },
        onClick: { control: false },
        reactRef: { control: false },
        iconPostfix: {
            control: 'select',
            options: Object.keys(ICONS),
            mapping: ICONS,
        },
        iconPrefix: {
            control: 'select',
            options: Object.keys(ICONS),
            mapping: ICONS,
        },
    },
};

export default meta;

type TStory = StoryObj<IButtonWithSkeletonProps>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const AllButtons: TStory = {
    name: 'Все паттерны',
    render: (props) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                maxWidth: '938px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Button
                    {...props}
                    pattern='primary'
                />

                <Button
                    {...props}
                    pattern='primary'
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='primary'
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='primary'
                    iconPrefix={ICONS.Plus}
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='primary'
                    content=''
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='primary'
                    isDisabled
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Button
                    {...props}
                    pattern='secondary'
                />

                <Button
                    {...props}
                    pattern='secondary'
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='secondary'
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='secondary'
                    iconPrefix={ICONS.Plus}
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='secondary'
                    content=''
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='secondary'
                    isDisabled
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Button
                    {...props}
                    pattern='tertiary'
                />

                <Button
                    {...props}
                    pattern='tertiary'
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='tertiary'
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='tertiary'
                    iconPrefix={ICONS.Plus}
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='tertiary'
                    content=''
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='tertiary'
                    isDisabled
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Button
                    {...props}
                    pattern='success'
                />

                <Button
                    {...props}
                    pattern='success'
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='success'
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='success'
                    iconPrefix={ICONS.Plus}
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='success'
                    content=''
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='success'
                    isDisabled
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Button
                    {...props}
                    pattern='negative'
                />

                <Button
                    {...props}
                    pattern='negative'
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='negative'
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='negative'
                    iconPrefix={ICONS.Plus}
                    iconPostfix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='negative'
                    content=''
                    iconPrefix={ICONS.Plus}
                />

                <Button
                    {...props}
                    pattern='negative'
                    isDisabled
                />
            </div>
        </div>
    ),
};

export const ButtonWithFullWidth: TStory = {
    name: 'Кнопка во всю ширину',
    args: { isFullWidth: true },
};
export const ButtonWithLoading: TStory = {
    name: 'Кнопка в состоянии загрузки',
    args: { isLoading: true },
};

export const ButtonWithSkeleton: TStory = {
    name: 'Скелетон кнопки',
    args: { isShowSkeleton: true },
};
