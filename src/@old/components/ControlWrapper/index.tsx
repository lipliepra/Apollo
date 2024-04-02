import {
    lazy,
    Suspense,
} from 'react';

import { type CFC } from '../../types';
import { Skeleton } from './parts/skeleton';
import { type IControlWrapperProps } from './types';
import './index.scss';

const ControlWrapperLazy = lazy(() => import('./parts/component'));

export const ControlWrapper: CFC<IControlWrapperProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <ControlWrapperLazy {...props} />
    </Suspense>
);
