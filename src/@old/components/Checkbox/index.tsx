import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { ICheckboxProps } from './types';
import './index.scss';

const CheckboxLazy = lazy(() => import('./parts/component'));

export const Checkbox: FC<ICheckboxProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton />}>
            <CheckboxLazy {...props} />
        </Suspense>
    );
};
