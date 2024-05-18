import {
    type FC,
    useMemo,
} from 'react';

import { ICONS } from '../../../assets';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IButtonIconProps } from '../types';

export const IconPostfix: FC<IButtonIconProps> = ({
    content,
    dataTestId,
    pattern,
    isLoading = false,
    iconPostfix = null,
}) => {
    const iconPath = useMemo(() => {
        if (isLoading) return ICONS.Loader;

        return iconPostfix;
    }, [
        isLoading,
        iconPostfix,
    ]);

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
