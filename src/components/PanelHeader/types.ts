import { type ReactNode } from 'react';

export interface IPanelHeaderProps {
    title: string;
    content?: ReactNode;
    rightContent?: ReactNode;
    withBottomBorder?: boolean;
}
