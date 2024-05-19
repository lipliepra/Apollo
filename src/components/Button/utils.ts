import { ICONS } from '../../assets';
import {
    type TFunc,
    type TIcon,
    type TNullable,
} from '../../types';

export const getPostfixIcon: TFunc<[TNullable<TIcon>, boolean], TNullable<TIcon>> = (icon, isLoading) => {
    if (isLoading) return ICONS.Loader;

    if (icon) return icon;

    return null;
};
