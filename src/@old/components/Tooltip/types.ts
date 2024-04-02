import { ReactNode } from 'react';

import { TFunc } from '../../types';

export interface ITooltipProps {
    content: ReactNode;
    dataTestId: string;
    defaultPosition?: TPosition;
    id?: string;
    className?: string;
    delay?: number;
    onHover?: TFunc;
    onHide?: TFunc;
}

export type TPosition = ('top' | 'bottom' | 'left' | 'right');
