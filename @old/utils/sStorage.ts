export const sStorage = (() => {
    const isEnable = !!sessionStorage || null;

    return {
        set: (key: string, value: string): null | void => isEnable && sessionStorage.setItem(key, value),
        get: (key: string): string | null => isEnable && sessionStorage.getItem(key),
        setJson: (key: string, value: any): null | void => isEnable && sessionStorage.setItem(key, JSON.stringify(value)),
        getJson: (key: string, defaultValue: any = null): any => {
            if (!isEnable) return null;

            const value = sessionStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;
        },
        remove: (key: string): null | void => isEnable && sessionStorage.removeItem(key),
        clear: (): null | void => isEnable && sessionStorage.clear(),
    };
})();