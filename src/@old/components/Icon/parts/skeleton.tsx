import React, { FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { IIconProps } from '../types';

export const Skeleton: FC<IIconProps> = ({ size = 'md' }) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-icon',
        elem: 'skeleton',
        mods: { [size]: true },
    });

    return <div className={generatedCls} />;
};
