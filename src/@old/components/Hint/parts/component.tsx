import React, { FC } from 'react';

import { Icon } from '../../Icon';
import { Tooltip } from '../../Tooltip';
import { ICONS } from '../../../assets';
import { IHintProps } from '../types';

const HintComponent: FC<IHintProps> = ({
    message,
    dataTestId,
    tooltipPosition = 'top',
}) => {
    if (!message) return null;

    return (
        <Tooltip
            content={message}
            defaultPosition={tooltipPosition}
            dataTestId={`${dataTestId}Hint`}
        >
            <Icon
                path={ICONS.Question}
                className='apollo-hint'
                dataTestId={`${dataTestId}Hint`}
            />
        </Tooltip>
    );
};

export default HintComponent;