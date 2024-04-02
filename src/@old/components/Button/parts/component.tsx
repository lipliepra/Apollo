import React, { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { WithSkeleton } from '../hocs/WithSkeleton';
import { IconPostfix } from './IconPostfix';
import { IconPrefix } from './IconPrefix';
import { type IButtonProps } from '../types';

const ButtonComponent: FC<IButtonProps> = (props) => {
    const {
        content,
        onClick,
        dataTestId,
        className = '',
        size = 'md',
        pattern = 'branded',
        isLoading = false,
        isDisabled = false,
        isFullWidth = false,
        reactRef = null,
    } = props;

    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        mods: {
            [pattern]: true,
            [size]: true,
            'full-width': isFullWidth,
            loading: isLoading,
            disabled: isDisabled,
        },
        className,
    });

    return (
        <button
            className={generatedCls}
            data-test-id={`${dataTestId}Button`}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            ref={reactRef}
        >
            <IconPrefix {...props} />

            {content}

            <IconPostfix {...props} />

        </button>
    );
};

export default WithSkeleton(ButtonComponent);
