import { type TFunc } from '../../types';
import { type TInputType } from './types';

export const getIsShowClearIcon: TFunc<[string, boolean], boolean> = (value, isDisabled) => (
    Boolean(value) && !isDisabled);

export const getIsShowViewIcon: TFunc<[string, TInputType], boolean> = (value, type) => (
    Boolean(value) && type === 'password');
