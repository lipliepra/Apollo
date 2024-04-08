import React, { FC } from 'react';

import { NOOP } from '../../../constants';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { IIconProps } from '../types';

const IconComponent: FC<IIconProps> = ({
    path: IconElem,
    size = 'md',
    isActive = false,
    isLoading = false,
    title = '',
    id = '',
    tabIndex,
    ariaLabel = '',
    className = '',
    onClick = NOOP,
    dataTestId,
    reactRef = null,

}) => {
    const generatedClassNames = generateCLassNames({
        block: 'apollo-icon',
        mods: {
            [size]: true,
            active: isActive,
            loading: isLoading,
        },
        className,
    });

    return (
        <span
            ref={reactRef}
            className={generatedClassNames}
            id={id}
            title={title}
            tabIndex={tabIndex}
            aria-label={ariaLabel}
            onClick={onClick}
            data-test-id={`${dataTestId}Icon`}
        >
            <IconElem />
        </span>
    );
};

export default IconComponent;
