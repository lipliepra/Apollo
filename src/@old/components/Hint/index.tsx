import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { IHintProps } from './types';
import './index.scss';

const HintLazy = lazy(() => import('./parts/component'));

export const Hint: FC<IHintProps> = (props) => {
    const allProps: IHintProps = {
        tooltipPosition: 'top',
        ...props,
    }

    return (
        <Suspense fallback={null}>
            <HintLazy {...allProps} />
        </Suspense>
    );
};
