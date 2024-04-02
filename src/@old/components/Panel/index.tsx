import React from 'react';

import { type CFC } from '../../types';
import { generateCLassNames } from '../../utils/generateClassNames';
import { type IPanelProps } from './types';
import './index.scss';

export const ApolloPanel: CFC<IPanelProps> = ({
    children,
    className = '',
    onClick = undefined,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-panel',
        mods: { clickable: !!onClick },
        className,
    });

    return (
        <div
            className={generatedCls}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
