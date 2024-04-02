import { type FC } from 'react';

import { Skeleton } from '../parts/skeleton';
import { type IInputProps } from '../types';

export const WithSkeleton = (Component: FC<IInputProps>) => (props: IInputProps) => {
    const { isShowSkeleton } = props;

    if (isShowSkeleton) return <Skeleton {...props} />;

    return <Component {...props} />;
};
