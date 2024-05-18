/**
 * RuntimeStatuses - перечисление, определяющее различные статусы выполнения приложения или компонента.
 *
 * Статусы:
 * - BeforeInitial: Исходное состояние, до начала выполнения или инициализации.
 * - Ready: Готово к использованию, выполнение или инициализация завершены успешно.
 * - Loading: Выполняется загрузка данных или ресурсов.
 * - Error: Произошла ошибка во время выполнения или инициализации.
 */
export enum RuntimeStatuses {
    BeforeInitial = 'before-initial',
    Ready = 'ready',
    Loading = 'loading',
    Error = 'error',
}

/**
 * InfoStatuses - перечисление, определеющее статусы информационных сообщений.
 */
export enum InfoStatuses {
    Positive = 'positive',
    Negative = 'negative',
    Warning = 'warning',
    Process = 'process',
}
