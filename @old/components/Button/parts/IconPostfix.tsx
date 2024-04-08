import React, { type FC } from 'react';

import { ICONS } from '../../../assets';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IButtonProps } from '../types';

export const IconPostfix: FC<IButtonProps> = ({
    content,
    dataTestId,
    size = 'md',
    isLoading = false,
    iconPostfix = null,
    isShowLoaderIcon = false,
}) => {
    const iconPostfixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: { postfix: !!content },
    });

    if (isShowLoaderIcon && isLoading) {
        return (
            <Icon
                className={iconPostfixCls}
                dataTestId={`${dataTestId}Button`}
                path={ICONS.Loader}
                size={size}
            />
        );
    }

    if (!iconPostfix) return null;

    if (isLoading) {
        return (
            <Icon
                className={iconPostfixCls}
                dataTestId={`${dataTestId}Button`}
                path={ICONS.Loader}
                size={size}
            />
        );
    }

    return (
        <Icon
            className={iconPostfixCls}
            dataTestId={`${dataTestId}Button`}
            path={iconPostfix}
            size={size}
        />
    );
};
