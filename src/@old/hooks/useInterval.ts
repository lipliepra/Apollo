import {
    useEffect,
    useRef,
} from 'react';

import { NOOP } from '../constants';
import {
    TFunc,
    TNullable,
} from '../types';

export const useInterval: TFunc<[TFunc<[]>, number]> = (callback, delay) => {
    const savedCallback = useRef<TNullable<TFunc>>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();

        if (delay !== null) {
            const id = setInterval(tick, delay);

            return () => {
                clearInterval(id);
            };
        }

        return NOOP;
    }, [delay]);
};
