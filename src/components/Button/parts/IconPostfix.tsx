import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { getPostfixIcon } from '../utils';
import { type IButtonIconProps } from '../types';

export const IconPostfix: FC<IButtonIconProps> = ({
    content,
    dataTestId,
    pattern,
    isLoading = false,
    iconPostfix = null,
}) => {
    const iconPath = getPostfixIcon(iconPostfix, isLoading);

    const iconPostfixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: { [pattern]: true },
    });

    if (!iconPath) return null;

    return (
        <Icon
            className={iconPostfixCls}
            dataTestId={`${dataTestId}Button`}
            isLoading={isLoading}
            path={iconPath}
            withMarginLeft={Boolean(content)}
        />
    );
};
