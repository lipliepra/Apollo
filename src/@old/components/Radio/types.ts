import { RefObject } from 'react';

import {
    TFunc,
    TNullable,
    TOptions,
} from '../../types';

export interface IRadioProps {
    options: TOptions<{ value: string; hint?: string }>;
    value: string;
    onChange: TFunc<[string]>;
    dataTestId: string;
    pattern?: TRadioPattern;
    isFullWidth?: boolean;
    className?: string;
    reactRef?: TNullable<RefObject<HTMLInputElement>>;
}

type TRadioPattern = ('vertical' | 'horizontal' | 'tabs');