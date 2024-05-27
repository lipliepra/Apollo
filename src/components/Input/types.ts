import { type FC } from 'react';

import {
    type TFunc,
    type TRef,
} from '../../types';

type TInputType = ('text' | 'password');

export interface IInputProps {
    value: string;
    onChange: TFunc<[string]>;
    dataTestId: string;
    type?: TInputType;
    reactRef?: TRef<HTMLInputElement>;
    placeholder?: string;
    isDisabled?: boolean;
    changeFormat?: TFunc<[string], string>;
    hasError?: boolean;
    className?: string;
    onBlur?: TFunc;
    onFocus?: TFunc;
}

export interface IInputWithModeProps extends IInputProps {
    isReadonly?: boolean;
    emptyCaption?: string;
    withHiddenValue?: boolean;
}

export interface IInputWithSkeletonProps extends IInputWithModeProps {
    isShowSkeleton?: boolean;
}

export interface IInputWithMode {
    View: TInput;
    Edit: TInput;
}

export type TInput = FC<IInputProps>;
