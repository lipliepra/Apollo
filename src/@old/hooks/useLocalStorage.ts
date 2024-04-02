import { useSyncExternalStore } from 'react';

import { lStorage } from '../utils/lStorage';
import { type TFunc } from '../types';

const getStorageDataByPath = (key: string, isNotObject = false) => isNotObject
    ? lStorage.get(key)
    : lStorage.getJson(key);

const subscribe = (onChange: TFunc) => {
    window.addEventListener('storage', onChange);

    return () => {
        window.removeEventListener('storage', onChange);
    };
};

export const useLocalStorage = (path: string, isNotObject = false) => (
    useSyncExternalStore(subscribe, () => getStorageDataByPath(path, isNotObject)));
