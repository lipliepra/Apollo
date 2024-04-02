import cn from 'classnames';

import { type CFC } from '../../../types';
import { Hint } from '../../Hint';
import { type IControlWrapperProps } from '../types';
import '../index.scss';

export const ControlWrapperComponent: CFC<IControlWrapperProps> = ({
    label,
    children,
    dataTestId,
    id = '',
    errorMessage = '',
    hint = '',
    tooltipPosition = 'top',
    isRequired = false,
    className = '',
    reactRef = null,
}) => {
    const clickLabelHandler = () => {
        const element = document.getElementById(id);

        if (element) element.click();
    };

    return (
        <div
            className={cn('apollo-control-wrapper', className)}
            data-test-id={`${dataTestId}ControlWrapper`}
            id={id}
            ref={reactRef}
            role='group'
        >
            <label
                className='apollo-control-wrapper__label'
                htmlFor={id}
                onClick={clickLabelHandler}
            >
                <span className='apollo-control-wrapper__label-text'>
                    {label}

                    {' '}

                    {!isRequired && '(необязательно)'}
                </span>

                {hint && (
                    <Hint
                        dataTestId={`${dataTestId}ControlWrapper`}
                        message={hint}
                        tooltipPosition={tooltipPosition}
                    />
                )}
            </label>

            <div className='apollo-control-wrapper__content'>
                {children}

                {!!errorMessage && <span className='apollo-control-wrapper__error-message'>{errorMessage}</span>}
            </div>
        </div>
    );
};

export default ControlWrapperComponent;
