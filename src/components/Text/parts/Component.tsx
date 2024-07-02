import { createElement } from 'react';
import cn from 'classnames';

import { type CFC } from '../../../types';
import { TextPatterns } from '../enums';
import { type ITextProps } from '../types';

/** Компонент текста */
export const Text: CFC<ITextProps> = ({
    children,
    dataTestId,
    tagName = 'span',
    pattern = TextPatterns.Body,
    className = '',
    reactRef = null,
    style,
}) => {
    if (!children) return null;

    return createElement(tagName, {
        ...(dataTestId && { 'data-test-id': `${dataTestId}Text` }),
        'data-component': 'apollo-component',
        ref: reactRef,
        style,
        className: cn(`apollo-text-${pattern}`, className),
    }, children);
};
