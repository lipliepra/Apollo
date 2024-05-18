import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IButtonProps } from '../types';

export const Skeleton: FC<IButtonProps> = ({
    isFullWidth,
    className,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'skeleton',
        mods: { 'full-width': isFullWidth },
        className,
    });

    return <div className={generatedCls} />;
};
