import React, { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IButtonProps } from '../types';

export const IconPrefix: FC<IButtonProps> = ({
    content,
    dataTestId,
    size = 'md',
    iconPrefix = null,
}) => {
    const iconPrefixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: { prefix: !!content },
    });

    if (!iconPrefix) return null;

    return (
        <Icon
            className={iconPrefixCls}
            dataTestId={`${dataTestId}Button`}
            path={iconPrefix}
            size={size}
        />
    );
};
