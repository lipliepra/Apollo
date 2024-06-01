import { type FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { IconPostfix } from './IconPostfix';
import { IconPrefix } from './IconPrefix';
import {
    type IButtonIconProps,
    type IButtonProps,
} from '../types';

export const Component: FC<IButtonProps> = ({
    content = '',
    onClick,
    dataTestId,
    className = '',
    pattern = 'primary',
    isLoading = false,
    isDisabled = false,
    isFullWidth = false,
    reactRef = null,
    iconPrefix = null,
    iconPostfix = null,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        mods: {
            [pattern]: true,
            'full-width': isFullWidth,
            'no-content': !content && (Boolean(iconPrefix || iconPostfix)),
        },
        className,
    });

    const commonIconProps: IButtonIconProps = {
        content,
        pattern,
        isLoading,
        dataTestId,
    };

    return (
        <button
            className={generatedCls}
            data-component='apollo-component'
            data-test-id={`${dataTestId}Button`}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            ref={reactRef}

        >
            <IconPrefix
                {...commonIconProps}
                iconPrefix={iconPrefix}
            />

            {content}

            <IconPostfix
                {...commonIconProps}
                iconPostfix={iconPostfix}
            />
        </button>
    );
};
