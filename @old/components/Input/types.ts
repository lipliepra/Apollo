import { type RefObject } from 'react';

import {
    type TFunc,
    type TNullable,
} from '../../types';

type TInputType = ('text' | 'password');

export interface IInputProps {
    value: string;
    onChange: TFunc<[string]>;
    dataTestId: string;
    type?: TInputType;
    id?: string;
    name?: string;
    title?: string;
    reactRef?: TNullable<RefObject<HTMLInputElement>>;
    onlyDigits?: boolean;
    placeholder?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    withHidden?: boolean;
    isShowSkeleton?: boolean;
    emptyCaption?: string;
    hasError?: boolean;
    className?: string;
    onBlur?: TFunc;
    onFocus?: TFunc;
}
