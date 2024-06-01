import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IIconProps } from '../types';

export const Component: FC<IIconProps> = ({
    path: IconElem,
    dataTestId,
    isActive = false,
    isLoading = false,
    isLarge = false,
    onClick,
    withMarginLeft = false,
    withMarginRight = false,
    className = '',
    reactRef = null,
}) => {
    const generatedClassNames = generateCLassNames({
        block: 'apollo-icon',
        mods: {
            active: isActive,
            loading: isLoading,
            large: isLarge,
            'margin-left': withMarginLeft,
            'margin-right': withMarginRight,
        },
        className,
    });

    return (
        <span
            className={generatedClassNames}
            data-component='apollo-component'
            data-test-id={`${dataTestId}Icon`}
            onClick={onClick}
            ref={reactRef}
        >
            <IconElem />
        </span>
    );
};
