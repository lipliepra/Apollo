import {
    type FC,
    useCallback,
    useEffect,
    useState,
} from 'react';
import _debounce from 'lodash/debounce';

import { type TFunc } from '../../../types';
import { WithReadonly } from '../hocs/WithReadonly';
import { WithSkeleton } from '../hocs/WithSkeleton';
import { PasswordInput } from './PasswordInput';
import { TextInput } from './TextInput';
import { type IInputProps } from '../types';

const InputComponent: FC<IInputProps> = ({
    value = '',
    type = 'text',
    hasError = false,
    onlyDigits = false,
    onChange,
    ...props
}) => {
    const [localValue, setLocalValue] = useState<string>('');
    const [isHasError, setIsHasError] = useState<boolean>(hasError);

    useEffect(() => {
        setLocalValue(value);

        if (value && isHasError) setIsHasError(false);
    }, [value]);

    useEffect(() => {
        setIsHasError(hasError);
    }, [hasError]);

    const debounceHandler = useCallback(_debounce((value: string) => { onChange(value); }, 500), []);

    const onChangeHandler: TFunc<[string]> = (_val) => {
        const val = onlyDigits
            ? _val.replace(/\D+/g, '')
            : _val;

        setLocalValue(val);
        debounceHandler(val);
    };

    const inputProps: IInputProps = {
        type,
        value: localValue,
        hasError: isHasError,
        onChange: onChangeHandler,
        ...props,
    };

    if (type === 'password') return <PasswordInput {...inputProps} />;

    return <TextInput {...inputProps} />;
};

export default WithSkeleton(WithReadonly(InputComponent));
