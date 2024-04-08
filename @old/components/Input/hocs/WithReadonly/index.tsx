import { type FC } from 'react';

import { generateCLassNames } from '../../../../utils/generateClassNames';
import { type IInputProps } from '../../types';
import { HiddenValue } from './HiddenValue';

const withReadonly = (Component: FC<IInputProps>) => (props: IInputProps) => {
    const {
        value,
        isReadonly,
        isFullWidth,
        emptyCaption = '',
        className = '',
        withHidden = false,
    } = props;

    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'view',
        mods: {
            'full-width': isFullWidth,
            'with-hidden': withHidden,
            'with-empty-caption': !value,
        },
        className,
    });

    if (!isReadonly) return <Component {...props} />;

    if (withHidden) return <HiddenValue {...props} />;

    return <div className={generatedCls}>{value || emptyCaption}</div>;
};

export const WithReadonly = withReadonly;
