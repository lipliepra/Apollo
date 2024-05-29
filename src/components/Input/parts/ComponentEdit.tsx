import {
    type ChangeEvent,
    type FC,
    useCallback,
    useEffect,
    useState,
} from 'react';
import _debounce from 'lodash/debounce';

import { ICONS } from '../../../assets';
import { type TFunc } from '../../../types';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import {
    getIsShowClearIcon,
    getIsShowViewIcon,
} from '../utils';
import { type IInputProps } from '../types';

export const ComponentEdit: FC<IInputProps> = ({
    value = '',
    type = 'text',
    hasError = false,
    onChange,
    changeFormat = (value: string) => value,
    reactRef = null,
    dataTestId,
    isDisabled = false,
    className = '',
    placeholder,
    onBlur,
    onFocus,
}) => {
    const [localValue, setLocalValue] = useState<string>('');
    const [isHaveError, setIsHaveError] = useState<boolean>(hasError);
    const [isPasswordInput, setIsPasswordInput] = useState<boolean>(type === 'password');

    useEffect(() => {
        setIsHaveError(hasError);
    }, [hasError]);

    useEffect(() => {
        setLocalValue(value);

        if (value && isHaveError) setIsHaveError(false);
    }, [value]);

    const generatedWrapperCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'wrapper',
    });

    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        mods: {
            disabled: isDisabled,
            'has-error': isHaveError,
            'is-password': type === 'password',
        },
        className,
    });

    const debounceHandler = useCallback(_debounce((value: string) => { onChange(value); }, 300), []);

    const onChangeHandler: TFunc<[ChangeEvent<HTMLInputElement>]> = (event) => {
        const val = event.target.value;

        setLocalValue(changeFormat(val));
        debounceHandler(changeFormat(val));
    };

    const resetValueHandler = () => {
        setLocalValue('');
        debounceHandler('');
    };

    return (
        <div className={generatedWrapperCls}>
            <input
                className={generatedCls}
                data-test-id={`${dataTestId}Input`}
                disabled={isDisabled}
                onBlur={onBlur}
                onChange={onChangeHandler}
                onFocus={onFocus}
                placeholder={placeholder}
                ref={reactRef}
                value={localValue}
                type={isPasswordInput
                    ? 'password'
                    : 'text'}
            />

            {getIsShowViewIcon(localValue, type) && (
                <Icon
                    className='apollo-input__icon-view'
                    dataTestId={`${dataTestId}ViewInput`}
                    onClick={() => { setIsPasswordInput((state) => !state); }}
                    path={isPasswordInput
                        ? ICONS.EyeOpen
                        : ICONS.EyeClose}
                />
            )}

            {getIsShowClearIcon(localValue, isDisabled) && (
                <Icon
                    className='apollo-input__icon-clear'
                    dataTestId={`${dataTestId}ClearInput`}
                    onClick={resetValueHandler}
                    path={ICONS.Cross}
                />
            )}
        </div>
    );
};
