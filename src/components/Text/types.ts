import { type CSSProperties } from 'react';

import { type TRef } from '../../types';
import { type TextPatterns } from './enums';

export interface ITextProps {
    dataTestId: string;
    pattern?: TextPatterns;
    tagName?: TTagName;
    className?: string;
    reactRef?: TRef<HTMLSpanElement | HTMLDivElement | HTMLHeadingElement>;
    style?: CSSProperties;
}

type TTagName = ('div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5');
