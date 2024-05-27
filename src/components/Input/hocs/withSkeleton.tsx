import { Skeleton } from '../parts/Skeleton';
import {
    type IInputWithSkeletonProps,
    type TInput,
} from '../types';

export const withSkeleton = (Component: TInput) => (props: IInputWithSkeletonProps) => {
    const { isShowSkeleton } = props;

    if (isShowSkeleton) return <Skeleton {...props} />;

    return <Component {...props} />;
};
