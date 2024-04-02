import React, { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IButtonProps } from '../types';

export const Skeleton: FC<IButtonProps> = ({
    size = 'md',
    isFullWidth = false,
    className = '',
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'skeleton',
        mods: {
            [size]: true,
            'full-width': isFullWidth,
        },
        className,
    });

    return <div className={generatedCls} />;
};
