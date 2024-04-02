import { ReactNode } from 'react';

export interface IHintProps {
    message: ReactNode;
    dataTestId: string;
    tooltipPosition?: 'left' | 'right' | 'top' | 'bottom';
}