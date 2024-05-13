import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IIconProps } from '../types';

export const Skeleton: FC<IIconProps> = ({
    isLarge = false,
    withMarginLeft = false,
    withMarginRight = false,
    className = '',
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-icon',
        elem: 'skeleton',
        mods: {
            large: isLarge,
            'margin-left': withMarginLeft,
            'margin-right': withMarginRight,
        },
        className,
    });

    return <div className={generatedCls} />;
};
