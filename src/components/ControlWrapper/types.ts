import { type TRef } from '../../types';

export interface IControlWrapperProps {
    label: string;
    dataTestId: string;
    errorMessage?: string;
    isRequired?: boolean;
    className?: string;
    reactRef?: TRef;
}
