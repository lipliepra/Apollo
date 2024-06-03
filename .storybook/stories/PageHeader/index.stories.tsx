import {
    Meta,
    StoryObj,
} from '@storybook/react';
import {
    Button,
    CFC,
    NOOP,
    PageHeader,
} from '../../../src';
import { IPageHeaderProps } from '../../../src/components/PageHeader/types';

const meta: Meta<CFC<IPageHeaderProps>> = {
    title: 'Components/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент заголовка страницы' } } },
    args: {
        dataTestId: 'dataTestId',
        title: 'Заголовок',
    },
    argTypes: {
        reactRef: { control: false },
        children: { control: 'text' },
    },
};

export default meta;

type TStory = StoryObj<CFC<IPageHeaderProps>>;

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const WithChildren: TStory = {
    name: 'С контентом справа',
    render: (props) => (
        <PageHeader {...props}>
            <Button
                onClick={NOOP}
                content='Нажми на меня'
                dataTestId=''
            />
        </PageHeader>
    ),
};

export const WithDescription: TStory = {
    name: 'С дополнительным контентом',
    args: { description: 'Дполнительное описание (например страницы)' },
};
