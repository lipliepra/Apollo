import { type FC } from 'react';

import { Skeleton } from '../parts/Skeleton';
import {
    type IButtonProps,
    type IButtonWithSkeletonProps,
} from '../types';

export const withSkeleton = (Component: FC<IButtonProps>) => (props: IButtonWithSkeletonProps) => {
    const { isShowSkeleton } = props;

    if (isShowSkeleton) return <Skeleton {...props} />;

    return <Component {...props} />;
};
