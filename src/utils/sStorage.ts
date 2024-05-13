/**
 * Утилита sStorage предоставляет методы для работы с сеансовым хранилищем браузера (sessionStorage).
 *
 * Методы:
 * - set: сохраняет значение в сеансовое хранилище по указанному ключу.
 * - get: получает значение из сеансового хранилища по указанному ключу.
 * - setJson: сохраняет объект в сеансовое хранилище после сериализации его в JSON.
 * - getJson: получает объект из сеансового хранилища по указанному ключу,
 *            десериализуя его из JSON, и возвращает значение по умолчанию, если ключ не найден.
 * - remove: удаляет значение из сеансового хранилища по указанному ключу.
 * - clear: очищает все значения из сеансового хранилища.
 *
 * Принцип работы:
 * - Проверяет, поддерживается ли сеансовое хранилище в текущем браузере.
 * - Если сеансовое хранилище поддерживается, возвращает объект с методами для работы с ним.
 * - Если сеансовое хранилище не поддерживается, возвращает объект с методами,
 *   которые либо не выполняют никаких действий, либо возвращают null.
 */
export const sStorage = (() => {
    const isEnable = !!sessionStorage || null;

    return {
        set: (key: string, value: string) => { isEnable && sessionStorage.setItem(key, value); },
        get: (key: string) => isEnable && sessionStorage.getItem(key),
        setJson: (key: string, value: unknown) => {
            isEnable && sessionStorage.setItem(
                key,
                JSON.stringify(value),
            );
        },
        getJson: (key: string, defaultValue: unknown = null) => {
            if (!isEnable) return null;

            const value = sessionStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;
        },
        remove: (key: string) => { isEnable && sessionStorage.removeItem(key); },
        clear: () => { isEnable && sessionStorage.clear(); },
    };
})();
