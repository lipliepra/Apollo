import React, {
    type FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { type IButtonProps } from './types';
import './index.scss';

const ButtonLazy = lazy(() => import('./parts/component'));

export const ApolloButton: FC<IButtonProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <ButtonLazy {...props} />
    </Suspense>
);
