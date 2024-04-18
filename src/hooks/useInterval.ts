import { useEffect } from 'react';

import { type TFunc } from '../types';

/**
 * Хук useInterval позволяет создавать интервальные вызовы функции-колбэка с указанным интервалом.
 * Принимает два аргумента:
 *
 * - callback - Функция-колбэк, которая будет вызываться с указанным интервалом.
 * - delay - Интервал времени (в миллисекундах) между каждым вызовом функции-колбэка
 *
 * Принцип работы:
 *
 * - Если значение равно null, интервальные вызовы приостанавливаются.
 */
export const useInterval: TFunc<[TFunc<[]>, number]> = (callback, delay) => {
    useEffect(() => {
        const tick = () => { callback(); };

        const id = delay !== null
            ? setInterval(tick, delay)
            : null;

        return () => {
            if (id !== null) clearInterval(id);
        };
    }, [
        callback,
        delay,
    ]);
};
