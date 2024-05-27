import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IInputProps } from '../types';

export const Skeleton: FC<IInputProps> = ({ className = '' }) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'skeleton',
        className,
    });

    return <div className={generatedCls} />;
};
