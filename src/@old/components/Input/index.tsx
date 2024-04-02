import {
    type FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { type IInputProps } from './types';
import './index.scss';

const InputLazy = lazy(() => import('./parts/component'));

export const ApolloInput: FC<IInputProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <InputLazy {...props} />
    </Suspense>
);
