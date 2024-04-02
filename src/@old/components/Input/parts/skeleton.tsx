import React, { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IInputProps } from '../types';

export const Skeleton: FC<IInputProps> = ({ isFullWidth = false }) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'skeleton',
        mods: { 'full-width': isFullWidth },
    });

    return <div className={generatedCls} />;
};
