import {
    type TFunc,
    type TIcon,
    type TNullable,
    type TRef,
} from '../../types';

export interface IButtonProps {
    onClick: TFunc;
    dataTestId: string;
    content?: string;
    pattern?: TButtonPattern;
    isLoading?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    reactRef?: TRef<HTMLButtonElement>;
    className?: string;
    iconPrefix?: TNullable<TIcon>;
    iconPostfix?: TNullable<TIcon>;
}

export interface IButtonWithSkeletonProps extends IButtonProps {
    isShowSkeleton?: boolean;
}

export interface IButtonIconProps {
    content: string;
    dataTestId: string;
    isLoading: boolean;
    pattern: TButtonPattern;
    iconPrefix?: TNullable<TIcon>;
    iconPostfix?: TNullable<TIcon>;
}

export type TButtonPattern = ('primary' | 'secondary' | 'tertiary' | 'success' | 'negative');
