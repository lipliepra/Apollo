import React, { FC } from 'react';

import { Hint } from '../Hint';
import { generateCLassNames } from '../../utils/generateClassNames';
import { IRadioProps } from './types';
import './index.scss';

export const Radio: FC<IRadioProps> = ({
    options,
    value,
    onChange,
    pattern = 'vertical',
    isFullWidth = false,
    dataTestId,
    className,
    reactRef = null,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-radio',
        mods: {
            [pattern]: true,
            'full-width': isFullWidth,
        },
        className,
    });

    const generatedRadioItemCls = (isChecked: boolean, isDisabled: boolean) => generateCLassNames({
        block: 'apollo-radio',
        elem: 'item',
        mods: {
            checked: isChecked,
            disabled: isDisabled,
        },
    });

    const generatedLabelCls = generateCLassNames({
        block: 'apollo-radio',
        elem: 'label',
    });

    const onChangeHandler = (value: string) => () => onChange(value);

    return (
        <div
            ref={reactRef}
            className={generatedCls}
            data-test-id={`${dataTestId}Radio`}
        >
            {options.map((option) => {
                const isChecked: boolean = value === option.value;
                const isDisabled = option?.isDisabled || false;

                return (
                    <label
                        key={`${option.label}_${option.value}`}
                        className={generatedRadioItemCls(isChecked, isDisabled)}
                    >
                        <input
                            type='radio'
                            className='apollo-radio__input'
                            value={option.value}
                            checked={isChecked}
                            disabled={isDisabled}
                            onChange={onChangeHandler(option.value)}
                        />

                        <span className={generatedLabelCls}>{option.label}</span>

                        {option.hint && !isDisabled && pattern !== 'tabs' && (
                            <Hint
                                message={option.hint}
                                dataTestId={`${dataTestId}Radio`}
                            />
                        )}
                    </label>
                );
            })}
        </div>
    );
};