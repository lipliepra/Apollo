import {
    type ChangeEvent,
    type FC,
} from 'react';

import { NOOP } from '../../../constants';
import { type TFunc } from '../../../types';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IInputProps } from '../types';

export const TextInput: FC<IInputProps> = ({
    value = '',
    placeholder = '',
    id = '',
    name = '',
    autoComplete,
    autoFocus = false,
    dataTestId,
    isFullWidth = false,
    isDisabled = false,
    hasError = false,
    reactRef,
    className = '',
    onChange,
    onBlur = NOOP,
    onFocus = NOOP,
    title = '',
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        mods: {
            text: true,
            disabled: isDisabled,
            'has-error': hasError,
            'full-width': isFullWidth,
        },
        className,
    });

    const onChangeHandler: TFunc<[ChangeEvent<HTMLInputElement>]> = (event) => {
        onChange(event.target.value);
    };

    return (
        <input
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            className={generatedCls}
            data-test-id={`${dataTestId}Input`}
            disabled={isDisabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChangeHandler}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={reactRef}
            title={title}
            type='text'
            value={value}
        />
    );
};
