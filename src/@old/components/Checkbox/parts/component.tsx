import React, { FC } from 'react';

import { Hint } from '../../Hint';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { ICheckboxProps } from '../types';
import '../index.scss';

export const CheckboxComponent: FC<ICheckboxProps> = ({
    value,
    label,
    onChange,
    dataTestId,
    pattern = 'common',
    hint = null,
    isDisabled = false,
    className = '',
    reactRef = null,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-checkbox',
        mods: {
            [pattern]: true,
            checked: value,
            disabled: isDisabled,
        },
        className,
    });

    const onChangeHandler = () => {
        onChange(!value);
    };

    return (
        <label className={generatedCls}>
            <input
                ref={reactRef}
                className='apollo-checkbox__input'
                type='checkbox'
                checked={value}
                disabled={isDisabled}
                tabIndex={0}
                data-test-id={`${dataTestId}Checkbox`}
                onChange={onChangeHandler}
            />

            <span className='apollo-checkbox__label'>{label}</span>

            {hint && !isDisabled && (
                <Hint
                    message={hint}
                    dataTestId={`${dataTestId}Checkbox`}
                />
            )}
        </label>
    );
};

export default CheckboxComponent;
