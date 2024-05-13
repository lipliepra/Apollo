import {
    type TFunc,
    type TIcon,
    type TNullable,
    type TRef,
} from '../../types';

export interface IIconProps {
    path: TNullable<TIcon>;
    dataTestId: string;
    isActive?: boolean;
    isLoading?: boolean;
    isLarge?: boolean;
    withMarginRight?: boolean;
    withMarginLeft?: boolean;
    className?: string;
    onClick?: TFunc;
    reactRef?: TRef<HTMLSpanElement>;
    isShowSkeleton?: boolean;
}
