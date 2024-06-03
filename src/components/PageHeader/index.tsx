import cn from 'classnames';

import { type CFC } from '../../types';
import {
    Text,
    TextPatterns,
} from '../Text';
import { type IPageHeaderProps } from './types';

/** Компонент заголовок страницы */
export const PageHeader: CFC<IPageHeaderProps> = ({
    title,
    dataTestId,
    className,
    description = '',
    reactRef = null,
    children,
}) => (
    <div
        className={cn('apollo-page-header', className)}
        data-component='apollo-component'
        data-test-id={`${dataTestId}PageHeader`}
        ref={reactRef}
    >
        <div className='apollo-page-header__wrapper'>
            <Text
                className='apollo-page-header__title'
                dataTestId={`${dataTestId}PageHeaderTitle`}
                pattern={TextPatterns.H1}
            >
                {title}
            </Text>

            <Text
                className='apollo-page-header__title'
                dataTestId={`${dataTestId}PageHeaderDescription`}
                pattern={TextPatterns.Label}
            >
                {description}
            </Text>
        </div>

        {children && (
            <div
                className={cn('apollo-page-header__content')}
                data-test-id={`${dataTestId}Content`}
            >
                {children}
            </div>
        )}
    </div>
);
