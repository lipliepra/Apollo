import React, { FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';

export const Skeleton: FC = () => {
    const generatedCls = generateCLassNames({
        block: 'apollo-sanitized',
        elem: 'skeleton',
    });

    return (
        <div className={generatedCls}>
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={`${generatedCls}-item`}
                />
            ))}
        </div>
    );
};
