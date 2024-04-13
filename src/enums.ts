/**
 * Статусы выполнения приложения.
 *
 * - `BeforeInitial`: Приложение еще не было инициализированно.
 * - `Ready`: Приложение готово к использованию.
 * - `Loading`: Приложение находится в процессе загрузки.
 * - `Error`: Произошла ошибка при выполнении приложения.
 */
export enum RuntimeStatuses {
    BeforeInitial = 'before-initial',
    Ready = 'ready',
    Loading = 'loading',
    Error = 'error',
}
