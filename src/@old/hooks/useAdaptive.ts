import {
    useLayoutEffect,
    useState,
} from 'react';
import throttle from 'lodash/throttle';

import {
    DESKTOP_BREAKPOINT,
    MOBILE_BREAKPOINT,
} from '../constants';
import { TFunc } from '../types';

interface IUseAdaptive {
    isMobile: boolean;
    isTablet: boolean;
    isAdaptive: boolean;
}

export const useAdaptive: TFunc<[], IUseAdaptive> = () => {
    const isMobileDefault = window.innerWidth <= MOBILE_BREAKPOINT;
    const isTabletDefault = window.innerWidth <= DESKTOP_BREAKPOINT && window.innerWidth > MOBILE_BREAKPOINT;

    const [isMobile, setIsMobile] = useState<boolean>(isMobileDefault);
    const [isTablet, setIsTablet] = useState<boolean>(isTabletDefault);

    useLayoutEffect(() => {
        const getIsAdaptiveInfo = throttle(() => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
            setIsTablet(window.innerWidth <= DESKTOP_BREAKPOINT && window.innerWidth > MOBILE_BREAKPOINT);
        }, 100);

        window.addEventListener('resize', getIsAdaptiveInfo);

        return () => {
            window.removeEventListener('resize', getIsAdaptiveInfo);
        };
    }, []);

    const isAdaptive = isMobile || isTablet;

    return {
        isMobile,
        isTablet,
        isAdaptive,
    };
};
