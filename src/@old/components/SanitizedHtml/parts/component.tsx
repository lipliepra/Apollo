import React, {
    FC,
    Fragment,
} from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import linkifyHtml from 'linkify-html';

import { tryDecode } from '../../../utils/tryDecode';
import { ISanitizedHtmlProps } from '../types';

const SanitizedHtml: FC<ISanitizedHtmlProps> = ({ html = '' }) => {
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
            ADD_ATTR: ['target'],
            FORBID_TAGS: [
                'form',
                'input',
                'textarea',
            ],
        },
    );

    return <Fragment>{parse(String(content))}</Fragment>;
};

export default SanitizedHtml;