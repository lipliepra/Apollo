import { useEffect } from 'react';

import {
    type TFunc,
    type TRef,
} from '../types';

type Event = (MouseEvent | TouchEvent);

/**
 * Хук useAdaptive определяет, был ли выполнен клик вне элемента.
 *
 * Принимает следующие пропы:
 * - `ref` - ссылка на элемент
 * - `handleClickOutside` - функция вызываемая, при клике вне элемента.
 * */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: TRef<T>,
    handleClickOutside: TFunc<[Event]>,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref?.current || ref?.current.contains((event?.target as Node) || null)) {
                return;
            }

            handleClickOutside(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [handleClickOutside]);
};
