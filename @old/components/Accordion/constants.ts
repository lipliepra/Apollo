import {
    IVariantParams,
    TVariantPart,
} from './types';

export const ACCORDION_DESCRIPTION_VARIANTS: Record<TVariantPart, IVariantParams> = {
    open: {
        opacity: 1,
        height: 'auto',
    },
    collapsed: {
        opacity: 0,
        height: 0,
    },
};

export const ACCORDION_DESCRIPTION_TRANSITION: { duration: number } = { duration: 0.3 };