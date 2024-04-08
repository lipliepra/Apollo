import {
    type ChangeEvent,
    type FC,
    useState,
} from 'react';

import { ICONS } from '../../../assets';
import { NOOP } from '../../../constants';
import { type TFunc } from '../../../types';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IInputProps } from '../types';

export const PasswordInput: FC<IInputProps> = ({
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
    className = '',
    reactRef,
    onChange,
    onBlur = NOOP,
    onFocus = NOOP,
    title = '',
}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        mods: {
            password: true,
            disabled: isDisabled,
            'has-error': hasError,
            'full-width': isFullWidth,
        },
        className,
    });

    const generatedWrapperCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'wrapper',
        mods: { 'full-width': isFullWidth },
        className,
    });

    const generatedIconCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'icon',
    });

    const onChangeHandler: TFunc<[ChangeEvent<HTMLInputElement>]> = (event) => {
        onChange(event.target.value);
    };

    const changeShownHandler = () => {
        setIsShowPassword((prev) => !prev);
    };

    return (
        <div className={generatedWrapperCls}>
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
                value={value}
                type={isShowPassword
                    ? 'text'
                    : 'password'}
            />

            <Icon
                className={generatedIconCls}
                dataTestId={`${dataTestId}Input`}
                onClick={changeShownHandler}
                path={isShowPassword
                    ? ICONS.EyeClose
                    : ICONS.EyeOpen}
            />
        </div>
    );
};
