import React, { FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';

export const Skeleton: FC = () => {
    const generatedCls = generateCLassNames({
        block: 'apollo-accordion',
        elem: 'skeleton',
    });

    return <div className={generatedCls} />;
};
