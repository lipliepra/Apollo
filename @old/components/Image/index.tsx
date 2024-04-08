import React, {
    type FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { type IImageProps } from './types';
import './index.scss';

const ImageLazy = lazy(() => import('./parts/component'));

export const ImageComponent: FC<IImageProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <ImageLazy {...props} />
    </Suspense>
);

export const Image = ImageComponent;
