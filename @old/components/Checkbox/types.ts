import {
    ReactNode,
    RefObject,
} from 'react';

import {
    TFunc,
    TNullable,
} from '../../types';

export interface ICheckboxProps {
    value: boolean;
    onChange: TFunc<[boolean]>;
    label: string;
    dataTestId: string;
    pattern?: 'common' | 'toggle';
    hint?: ReactNode;
    isDisabled?: boolean;
    className?: string;
    reactRef?: TNullable<RefObject<HTMLInputElement>>;
}