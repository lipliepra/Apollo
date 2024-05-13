import {
    type FC,
    Suspense,
} from 'react';

import { IconLazy } from './lazy';
import { Skeleton } from './parts/Skeleton';
import { type IIconProps } from './types';

/** Компонент иконки */
export const Icon: FC<IIconProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <IconLazy {...props} />
    </Suspense>
);
