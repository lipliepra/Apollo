import {
    type FC,
    type PropsWithChildren,
    type RefObject,
    type SVGProps,
} from 'react';

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type TStatus = ('info' | 'success' | 'warning' | 'error');

export type TFunc<Args extends Array<unknown> = Array<never>, Return = void> = (...args: Args) => Return;

export type TRef<T = HTMLDivElement> = TNullable<RefObject<T>>;

export type TSetTimeout = ReturnType<typeof setTimeout>;

export type TIcon = FC<SVGProps<SVGSVGElement>>;

export type TNullable<T> = (T | null);

export type TUnkObject = Record<string, unknown>;

export type TOption<T = TUnkObject> = ({
    label: string | null;
    value: string;
    isDisabled?: boolean;
    description?: string;
} & T);

export type TOptions<T = TUnkObject> = Array<TOption<T>>;

export type TSearchOptions<T = TUnkObject> = TFunc<[string, TFunc<[TOptions<T>]>]>;
