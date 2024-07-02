import { type FC } from 'react';

import { generateCLassNames } from '../../utils/generateClassNames';
import {
    Text,
    TextPatterns,
} from '../Text';
import { type IPanelHeaderProps } from './types';

/** Компонент шапки панели */
export const PanelHeader: FC<IPanelHeaderProps> = ({
    title,
    content,
    rightContent,
    withBottomBorder,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-panel-header',
        mods: { 'with-bottom-border': withBottomBorder },
    });

    return (
        <div className={generatedCls}>
            <div className='apollo-paтуд-header__content'>
                <Text
                    pattern={TextPatterns.H2}
                    tagName='h2'
                >
                    {title}
                </Text>

                {content}
            </div>

            {rightContent}
        </div>
    );
};
