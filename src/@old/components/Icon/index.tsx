import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { IIconProps } from './types';
import './index.scss';

const IconLazy = lazy(() => import('./parts/component'));

export const Icon: FC<IIconProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton {...props} />}>
            <IconLazy {...props} />
        </Suspense>
    );
};
