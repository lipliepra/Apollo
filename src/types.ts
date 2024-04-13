import {
    type FC,
    type PropsWithChildren,
    type RefObject,
    type SVGProps,
} from 'react';

/** Функциональный компонент с дочерними элементами */
export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

/** Статус: информация, успех, предупреждение или ошибка */
export type TStatus = ('info' | 'success' | 'warning' | 'error');

/** Функция с определенными аргументами и возвращаемым значением */
export type TFunc<Args extends Array<unknown> = Array<never>, Return = void> = (...args: Args) => Return;

/** Ссылка на DOM-элемент */
export type TRef<T = HTMLDivElement> = TNullable<RefObject<T>>;

/** Возвращаемое значение функции setTimeout */
export type TSetTimeout = ReturnType<typeof setTimeout>;

/** Компонент React, представляющий иконку SVG */
export type TIcon = FC<SVGProps<SVGSVGElement>>;

/** Значение, которое может быть либо заданным типом, либо null */
export type TNullable<T> = (T | null);

/** Объект с неопределенными свойствами */
export type TUnkObject = Record<string, unknown>;

/** Опция в списке опций */
export type TOption<T = TUnkObject> = ({
    label: string | null;
    value: string;
    isDisabled?: boolean;
    description?: string;
} & T);

/** Массив опций */
export type TOptions<T = TUnkObject> = Array<TOption<T>>;

/** * Функция для поиска опций */
export type TSearchOptions<T = TUnkObject> = TFunc<[string, TFunc<[TOptions<T>]>]>;
