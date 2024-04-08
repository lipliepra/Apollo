import {
    type FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { type IAccordionProps } from './types';
import './index.scss';

const AccordionLazy = lazy(() => import('./parts/component'));

export const Accordion: FC<IAccordionProps> = (props) => (
    <Suspense fallback={<Skeleton />}>
        <AccordionLazy {...props} />
    </Suspense>
);
