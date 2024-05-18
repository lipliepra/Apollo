import {
    type FC,
    Suspense,
} from 'react';

import { ButtonLazy } from './lazy';
import { Skeleton } from './parts/Skeleton';
import { type IButtonProps } from './types';

/** Компонент кнопки */
export const Button: FC<IButtonProps> = (props) => (
    <Suspense fallback={<Skeleton {...props} />}>
        <ButtonLazy {...props} />
    </Suspense>
);
