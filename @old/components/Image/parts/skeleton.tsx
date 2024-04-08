import React, { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IImageProps } from '../types';

export const Skeleton: FC<IImageProps> = ({ className = '' }) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-image',
        elem: 'skeleton',
        className,
    });

    return <div className={generatedCls} />;
};
