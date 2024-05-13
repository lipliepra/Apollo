import { type FC } from 'react';

import { NOOP } from '../../../constants';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { withSkeleton } from '../hocs/withSkeleton';
import { type IIconProps } from '../types';

const Component: FC<IIconProps> = ({
    path: IconElem,
    dataTestId,
    isActive = false,
    isLoading = false,
    isLarge = false,
    withMarginLeft = false,
    withMarginRight = false,
    className = '',
    onClick = NOOP,
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
            data-test-id={`${dataTestId}Icon`}
            onClick={onClick}
            ref={reactRef}
        >
            <IconElem />
        </span>
    );
};

export default withSkeleton(Component);
