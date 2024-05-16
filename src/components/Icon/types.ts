import {
    type TFunc,
    type TIcon,
    type TNullable,
    type TRef,
} from '../../types';

export interface IIconProps {
    /** Иконка для вставки  */
    path: TNullable<TIcon>;
    /** Уникальный идентификатор для тестов */
    dataTestId: string;
    /** Флаг, определяющий активное состояние  */
    isActive?: boolean;
    /** Флаг, определяющий состояние загрузки  */
    isLoading?: boolean;
    /** Флаг, определяющий, должен ли компонент быть больше  */
    isLarge?: boolean;
    /** Флаг, определяющий, должна ли показываться заглушка  */
    isShowSkeleton?: boolean;
    /** Флаг, определяющий наличие отступа справа от компонента  */
    withMarginRight?: boolean;
    /** Флаг, определяющий наличие отступа слева от компонента  */
    withMarginLeft?: boolean;
    /** Дополнительный класс для кастомизации */
    className?: string;
    /** Функция, вызываемая при клике на компонент */
    onClick?: TFunc;
    /** Ссылка на элемент  */
    reactRef?: TRef<HTMLSpanElement>;
}
