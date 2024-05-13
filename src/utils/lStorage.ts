/**
 * Утилита lStorage предоставляет методы для работы с локальным хранилищем браузера (localStorage).
 *
 * Методы:
 * - set: сохраняет значение в локальное хранилище по указанному ключу.
 * - get: получает значение из локального хранилища по указанному ключу.
 * - setJson: сохраняет объект в локальное хранилище после сериализации его в JSON.
 * - getJson: получает объект из локального хранилища по указанному ключу,
 *            десериализуя его из JSON, и возвращает значение по умолчанию, если ключ не найден.
 * - remove: удаляет значение из локального хранилища по указанному ключу.
 * - clear: очищает все значения из локального хранилища.
 *
 * Принцип работы:
 * - Проверяет, поддерживается ли локальное хранилище в текущем браузере.
 * - Если локальное хранилище поддерживается, возвращает объект с методами для работы с ним.
 * - Если локальное хранилище не поддерживается, возвращает объект с методами,
 *   которые либо не выполняют никаких действий, либо возвращают null.
 */
export const lStorage = (() => {
    const isEnable = !!localStorage || null;

    return {
        set: (key: string, value: string) => { isEnable && localStorage.setItem(key, value); },
        get: (key: string) => isEnable && localStorage.getItem(key),
        setJson: (key: string, value: unknown) => {
            isEnable && localStorage.setItem(
                key,
                JSON.stringify(value),
            );
        },
        getJson: (key: string, defaultValue: unknown = null) => {
            if (!isEnable) return null;

            const value = localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;
        },
        remove: (key: string) => { isEnable && localStorage.removeItem(key); },
        clear: () => { isEnable && localStorage.clear(); },
    };
})();
