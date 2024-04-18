import {
    useEffect,
    useRef,
} from 'react';

import {
    type TFunc,
    type TRef,
} from '../types';

type Event = (MouseEvent | TouchEvent);

/**
 * Хук useClickOutside позволяет обрабатывать события клика вне определенного DOM-элемента.
 *
 * Принимает два аргумента:
 *
 * - ref: ссылка на DOM-элемент, вне которого нужно обрабатывать клики.
 * - handleClickOutside: функция обратного вызова, которая будет вызываться при клике вне указанного элемента.
 *
 * Принцип работы:
 *
 *  - При монтировании компонента хук добавляет слушатели событий для клика мыши и касания на документ.
 * Когда происходит клик, хук проверяет, является ли цель события дочерним элементом ref.
 * Если цель события находится вне ref, вызывается функция handleClickOutside.
 *
 * - При размонтировании компонента хук удаляет слушатели событий.
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: TRef<T>,
    handleClickOutside: TFunc<[Event]>,
) => {
    const handleClickOutsideRef = useRef(handleClickOutside);

    useEffect(() => {
        handleClickOutsideRef.current = handleClickOutside;
    }, [handleClickOutside]);

    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains((event.target as Node) || null)) {
                return;
            }

            handleClickOutsideRef.current(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
};
