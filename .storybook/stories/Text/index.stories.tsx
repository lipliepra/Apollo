import {
    Meta,
    StoryObj,
} from '@storybook/react';
import { Fragment } from 'react';
import {
    CFC,
    Text,
    TextPatterns,
} from '../../../src';
import { ITextProps } from '../../../src/components/Text/types';

const meta: Meta<CFC<ITextProps>> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: { docs: { description: { component: 'Компонент текста' } } },
    args: {
        dataTestId: 'dataTestId',
        children: 'Текст для демонстрации',
    },
    argTypes: {
        reactRef: { control: false },
        children: { control: 'text' },
    },
};

export default meta;

type TStory = StoryObj<ITextProps>

export const Component: TStory = { name: 'Компонент по-умолчанию' };

export const AllTextPatterns: TStory = {
    name: 'Все паттерны',
    render: (props) => (
        <Fragment>
            {Object.entries(TextPatterns).map(([key, value]) => (
                <div key={key}>
                    <Text
                        {...props}
                        style={{
                            display: 'inline-block',
                            width: '200px',
                            marginBottom: '20px',
                        }}
                    >
                        {`${key}:`}
                    </Text>

                    <Text
                        {...props}
                        pattern={value}
                    />
                </div>
            ))}
        </Fragment>
    ),
};
