import { type FC } from 'react';

import { generateCLassNames } from '../../utils/generateClassNames';
import { type IPanelProps } from './types';

/** Компонент панели */
export const Panel: FC<IPanelProps> = ({
    className,
    dataTestId = '',
    children,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-panel',
        className,
    });

    return (
        <div
            className={generatedCls}
            {...(dataTestId && { 'data-test-id': `${dataTestId}Panel` })}
        >

            {children}
        </div>
    );
};
