import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { ISanitizedHtmlProps } from './types';
import './index.scss';

const SanitizedHtmlLazy = lazy(() => import('./parts/component'));

export const SanitizedHtml: FC<ISanitizedHtmlProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton />}>
            <SanitizedHtmlLazy {...props} />
        </Suspense>
    );
};
