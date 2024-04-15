/**
 * Статусы выполнения приложения:
 *
 * - `BeforeInitial` - приложение еще не было инициализированно.
 * - `Ready` - приложение готово к использованию.
 * - `Loading` - приложение находится в процессе загрузки.
 * - `Error` - произошла ошибка при выполнении приложения.
 */
export enum RuntimeStatuses {
    BeforeInitial = 'before-initial',
    Ready = 'ready',
    Loading = 'loading',
    Error = 'error',
}
