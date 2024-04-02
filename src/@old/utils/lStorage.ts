export const lStorage = (() => {
    const isEnable = !!localStorage || null;

    return {
        set: (key: string, value: string): null | void => isEnable && localStorage.setItem(key, value),
        get: (key: string): string | null => isEnable && localStorage.getItem(key),
        setJson: (key: string, value: any): null | void => isEnable && localStorage.setItem(key, JSON.stringify(value)),
        getJson: (key: string, defaultValue: any = null): any => {
            if (!isEnable) return null;

            const value = localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;
        },
        remove: (key: string): null | void => isEnable && localStorage.removeItem(key),
        clear: (): null | void => isEnable && localStorage.clear(),
    };
})();