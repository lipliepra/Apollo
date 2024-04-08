import {
    TFunc,
    TIcon,
    TRef,
    TSize,
} from '../../types';

export interface IIconProps {
    path: TIcon;
    dataTestId: string;
    size?: TSize;
    title?: string;
    isActive?: boolean;
    isLoading?: boolean;
    id?: string;
    tabIndex?: number;
    ariaLabel?: string;
    className?: string;
    onClick?: TFunc;
    reactRef?: TRef;
}