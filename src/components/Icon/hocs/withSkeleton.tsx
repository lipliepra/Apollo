import { type FC } from 'react';

import { Skeleton } from '../parts/Skeleton';
import {
    type IIconProps,
    type IIconWithSkeletonProps,
} from '../types';

export const withSkeleton = (Component: FC<IIconProps>) => (props: IIconWithSkeletonProps) => {
    const { isShowSkeleton } = props;

    if (isShowSkeleton) return <Skeleton {...props} />;

    return <Component {...props} />;
};
