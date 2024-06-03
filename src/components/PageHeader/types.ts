import { type TRef } from '../../types';

export interface IPageHeaderProps {
    title: string;
    dataTestId: string;
    description?: string;
    className?: string;
    reactRef?: TRef;
}
