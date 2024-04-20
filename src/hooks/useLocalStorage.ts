import { useSyncExternalStore } from 'react';

import { type TFunc } from '../types';

const subscribe = (onChange: TFunc) => {
    window.addEventListener('storage', onChange);

    return () => {
        window.removeEventListener('storage', onChange);
    };
};

/**
 * Хук useLocalStorage позволяет синхронизировать состояние компонента с данными из localStorage.
 *
 * Принимает один аргумент:
 * - key - Ключ, по которому данные хранятся в localStorage.
 *
 * Принцип работы:
 * - Возвращает значение, хранящееся в localStorage по указанному ключу.
 */
export const useLocalStorage = (key: string) => useSyncExternalStore(
    subscribe.bind(null, key), () => localStorage.getItem(key),
);
