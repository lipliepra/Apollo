import {useEffect, useRef} from "react";
import { TFunc } from '../types';

export const usePrevious: TFunc<[any], any> = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};
