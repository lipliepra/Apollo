import { type FC } from 'react';

import { Skeleton } from '../parts/skeleton';
import { type IButtonProps } from '../types';

export const WithSkeleton = (Component: FC<IButtonProps>) => (props: IButtonProps) => {
    const { isShowSkeleton } = props;

    if (isShowSkeleton) return <Skeleton {...props} />;

    return <Component {...props} />;
};
