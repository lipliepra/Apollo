import { type RefObject } from 'react';

import {
    type TFunc,
    type TIcon,
    type TNullable,
    type TSize,
    type TStatus,
} from '../../types';

export interface IButtonProps {
    content?: string;
    onClick: TFunc;
    dataTestId: string;
    pattern?: TButtonPattern;
    size?: TSize;
    isLoading?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isShowSkeleton?: boolean;
    reactRef?: TNullable<RefObject<HTMLButtonElement>>;
    className?: string;
    iconPrefix?: TNullable<TIcon>;
    iconPostfix?: TNullable<TIcon>;
    isShowLoaderIcon?: boolean;
}

export type TButtonPattern = (('branded' | 'common' | 'primary' | 'secondary' | 'like-link' | 'like-icon') | TStatus);
