import { useEffect } from 'react';

import { type TFunc } from '../types';

const SCROLL_HIDDEN_CLASSNAME = 'scroll-hidden';

/**
 * Хук useDisableScroll позволяет управлять возможностью прокрутки страницы.
 *
 * - Когда значение isDisabledScroll равно true, прокрутка страницы будет запрещена.
 *
 * - Когда значение isDisabledScroll равно false, прокрутка страницы будет разрешена.
 *
 * Принцип работы:
 *
 * - При монтировании компонента хук добавляет класс SCROLL_HIDDEN_CLASSNAME к телу документа,
 * если isDisabledScroll равно true.
 *
 * - При размонтировании компонента или при изменении значения isDisabledScroll на false, хук удаляет этот класс.
 */
export const useDisableScroll: TFunc<[boolean]> = (isDisabledScroll) => {
    useEffect(() => {
        if (isDisabledScroll) {
            document.body.classList.add(SCROLL_HIDDEN_CLASSNAME);
        } else {
            document.body.classList.remove(SCROLL_HIDDEN_CLASSNAME);
        }

        return () => {
            document.body.classList.remove(SCROLL_HIDDEN_CLASSNAME);
        };
    }, [isDisabledScroll]);
};
