import {
    TIcon,
    TNullable,
    TRef,
} from '../../types';

export interface IAccordionProps {
    title: string;
    description: string;
    dataTestId: string;
    className?: string;
    iconPrefix?: TNullable<TIcon>;
    reactRef?: TRef;
}

export type TVariantPart = ('open' | 'collapsed');

export interface IVariantParams {
    opacity: number;
    height: string | number;
}