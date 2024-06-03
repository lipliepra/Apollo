import cn from 'classnames';

import { type CFC } from '../../types';
import {
    Text,
    TextPatterns,
} from '../Text';
import { type IControlWrapperProps } from './types';

export const ControlWrapper: CFC<IControlWrapperProps> = ({
    label,
    children,
    dataTestId,
    errorMessage = '',
    isRequired = false,
    className = '',
    reactRef = null,
}) => (
    <div
        className={cn('apollo-control-wrapper', className)}
        data-component='apollo-component'
        data-test-id={`${dataTestId}ControlWrapper`}
        ref={reactRef}
        role='group'
    >
        <Text
            dataTestId={`${dataTestId}ControlWrapper`}
            pattern={TextPatterns.Label}
        >
            {label}

            {!isRequired && ' (необязательно)'}
        </Text>

        <div className='apollo-control-wrapper__content'>
            {children}

            <Text
                className='apollo-control-wrapper__error-message'
                dataTestId={`${dataTestId}ControlWrapper`}
                pattern={TextPatterns.Negative}
            >
                {Boolean(errorMessage) && errorMessage}
            </Text>
        </div>
    </div>
);
