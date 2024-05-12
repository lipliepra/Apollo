import cn from 'classnames';

import { type TFunc } from '../types';

type TMods = Record<string, string | boolean | undefined>;

export interface IGenerateClassNamesParams {
    block: string;
    elem?: string;
    mods?: TMods;
    className?: string;
}

export const generateCLassNames: TFunc<[IGenerateClassNamesParams], string> = ({
    block,
    elem = '',
    mods = {},
    className = '',
}) => {
    const elementClassName = elem
        ? `${block}__${elem}`
        : block;

    const allMods: Array<string> = [];

    const normalizeBooleanMods: TFunc<[string, string | boolean], string> = (modName, value) => {
        if (typeof value === 'boolean') {
            if (value) return modName;

            return undefined;
        }

        return value;
    };

    Object.entries(mods).forEach(([key, value]) => {
        const normalizedMods = normalizeBooleanMods(key, value);

        if (normalizedMods) {
            allMods.push(normalizedMods);
        }
    });

    return cn(
        elementClassName,
        allMods.filter(Boolean).map((mod) => `${elementClassName}_${mod}`),
        className,
    );
};
