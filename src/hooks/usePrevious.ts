import {
    useEffect,
    useRef,
} from 'react';

/**
 * Хук usePrevious позволяет получить предыдущее значение переменной или состояния.
 *
 * Принимает один аргумент:
 * - key - Текущее значение, для которого необходимо получить предыдущее значение.
 *
 * Принцип работы:
 * - Возвращает предыдущее значение переменной или состояния.
 */
export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
