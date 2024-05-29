import cn from 'classnames';

import { type CFC } from '../../types';
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
        data-test-id={`${dataTestId}ControlWrapper`}
        ref={reactRef}
        role='group'
    >
        <label className='apollo-control-wrapper__label'>
            <span className='apollo-control-wrapper__label-text'>
                {label}

                {!isRequired && ' (необязательно)'}
            </span>
        </label>

        <div className='apollo-control-wrapper__content'>
            {children}

            {!!errorMessage && <span className='apollo-control-wrapper__error-message'>{errorMessage}</span>}
        </div>
    </div>
);
