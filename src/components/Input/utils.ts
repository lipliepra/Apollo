import { type TFunc } from '../../types';
import { type TInputType } from './types';

export const getIsShowClearIcon: TFunc<[string, boolean], boolean> = (value, isDisabled) => (
    Boolean(value) && !isDisabled);

export const getIsShowViewIcon: TFunc<[string, boolean, TInputType], boolean> = (value, isDisabled, type) => (
    Boolean(value) && !isDisabled && type === 'password');
