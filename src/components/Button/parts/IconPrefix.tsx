import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IButtonIconProps } from '../types';

export const IconPrefix: FC<IButtonIconProps> = ({
    content,
    pattern,
    dataTestId,
    iconPrefix = null,
}) => {
    const iconPrefixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: { [pattern]: true },
    });

    if (!iconPrefix) return null;

    return (
        <Icon
            className={iconPrefixCls}
            dataTestId={`${dataTestId}Button`}
            path={iconPrefix}
            withMarginRight={Boolean(content)}
        />
    );
};
