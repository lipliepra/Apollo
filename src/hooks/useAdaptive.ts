import {
    useLayoutEffect,
    useState,
} from 'react';
import { throttle } from 'lodash';

import {
    DESKTOP_BREAKPOINT,
    MOBILE_BREAKPOINT,
} from '../constants';
import { type TFunc } from '../types';

interface IUseAdaptive {
    isMobile: boolean;
    isTablet: boolean;
    isAdaptive: boolean;
}

/**
 * Хук useAdaptive определяет тип адаптивности устройства:
 *
 * - `isMobile` - устройство является мобильным.
 * - `isTablet` - устройство является планшетным.
 * - `isAdaptive` - устройство является адаптивным (мобильным или планшетным).
 * */
export const useAdaptive: TFunc<[], IUseAdaptive> = () => {
    const isMobileDefault = window.innerWidth <= MOBILE_BREAKPOINT;
    const isTabletDefault = window.innerWidth <= DESKTOP_BREAKPOINT && window.innerWidth > MOBILE_BREAKPOINT;

    const [isMobile, setIsMobile] = useState<boolean>(isMobileDefault);
    const [isTablet, setIsTablet] = useState<boolean>(isTabletDefault);

    useLayoutEffect(() => {
        const checkIsAdaptive = throttle(() => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
            setIsTablet(window.innerWidth <= DESKTOP_BREAKPOINT && window.innerWidth > MOBILE_BREAKPOINT);
        }, 100);

        window.addEventListener('resize', checkIsAdaptive);

        return () => { window.removeEventListener('resize', checkIsAdaptive); };
    }, []);

    return {
        isMobile,
        isTablet,
        isAdaptive: isMobile || isTablet,
    };
};
