import {
    type FC,
    Fragment,
} from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import linkifyHtml from 'linkify-html';

import { tryDecode } from './utils';
import {
    ADD_ATTRIBUTES,
    FORBIDDEN_TAGS,
} from './constants';
import { type ISanitizedHtmlProps } from './types';

/**
 * Компонент SanitizedHtml представляет собой компонент React для безопасного отображения HTML контента.
 *
 * Принимает следующие свойства:
 * - html: строка с HTML контентом, который необходимо отобразить (по умолчанию пустая строка).
 *
 * Принцип работы:
 * - Использует библиотеку DOMPurify для безопасной очистки HTML контента от потенциально опасных элементов и атрибутов.
 * - Использует библиотеку linkifyHtml для преобразования ссылок в HTML контенте в активные ссылки.
 * - Устанавливает атрибут target для ссылок в зависимости от их типа (внутренние или внешние).
 * - Использует функцию tryDecode для форматирования ссылок перед их отображением.
 *
 * Возвращает безопасно очищенный и отформатированный HTML контент для отображения в компоненте.
 */
export const SanitizedHtml: FC<ISanitizedHtmlProps> = ({ html = '' }) => {
    const content = DOMPurify.sanitize(
        linkifyHtml(html, {
            target: (href: string) => {
                try {
                    const url = new URL(href);
                    const isExternalUrl = url.origin !== window.location.origin;

                    return isExternalUrl
                        ? '_blank'
                        : '_self';
                } catch {
                    return '_blank';
                }
            },
            format: (href: string) => tryDecode(href),
        }),
        {
            ADD_ATTR: ADD_ATTRIBUTES,
            FORBID_TAGS: FORBIDDEN_TAGS,
        },
    );

    return <Fragment>{parse(String(content))}</Fragment>;
};
