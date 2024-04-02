import {
    type FC,
    type PropsWithChildren,
    type RefObject,
    type SVGProps,
} from 'react';

// Interface
export interface ILocation {
    search: string;
    state: {
        pathname: string;
        search: string;
    };
}

export interface IKeyable {
    key: string;
}

export interface IMoney {
    amount: number;
    currency: string;
}

// Type
// eslint-disable-next-line
export type TAny = any;

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type TIcon = FC<SVGProps<SVGSVGElement>>;

export type TRef = TNullable<RefObject<HTMLDivElement>>;

export type TNullable<T> = (T | null);

export type TStrNum = (string | number);

export type TOption<T = Record<string, unknown>> = ({
    label: string | null;
    value: string;
    prefix?: string;
    postfix?: string;
    isDisabled?: boolean;
    isOff?: boolean;
    description?: string;
} & T);

export type TOptions<T = Record<string, unknown>> = Array<TOption<T>>;

export type TValue<T = Record<string, unknown>> = (TOption<T> | TOptions<T> | T | null | TStrNum | boolean | undefined);

export type TFunc<Args extends Array<TAny> = Array<never>, Return = void> = (...args: Args) => Return;

export type TSearchOptions = TFunc<[string, TFunc<[TOptions]>]>;

export type TSize = ('md' | 'lg');

export type TStatus = ('info' | 'warning' | 'negative' | 'positive');

export type TBrand = ('orange' | 'green' | 'purple' | 'magenta');

export type TLang = ('ru' | 'en');

export type TMoney = TNullable<IMoney>;
