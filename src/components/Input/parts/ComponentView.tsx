import {
    type FC,
    useState,
} from 'react';

import { ICONS } from '../../../assets';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { Icon } from '../../Icon';
import { type IInputWithModeProps } from '../types';

export const ComponentView: FC<IInputWithModeProps> = ({
    value = '',
    className = '',
    emptyCaption = '',
    withHiddenValue = false,
    dataTestId,
}) => {
    const [isValueHidden, setIsValueHidden] = useState<boolean>(withHiddenValue);

    const generatedCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'view',
        mods: { 'with-hidden': withHiddenValue },
        className,
    });

    const generatedTextCls = generateCLassNames({
        block: 'apollo-input',
        elem: 'view-text',
        mods: {
            'with-hidden': withHiddenValue && isValueHidden,
            'with-empty-caption': !value,
        },
    });

    const renderValue = () => {
        if (isValueHidden) return Array.from({ length: value.length }).fill('*').join('');

        if (value) return value;

        return emptyCaption;
    };

    return (
        <div className={generatedCls}>
            <span className={generatedTextCls}>{renderValue()}</span>

            {withHiddenValue && Boolean(value) && (
                <Icon
                    className='apollo-input__view-icon'
                    dataTestId={`${dataTestId}Hide`}
                    onClick={() => { setIsValueHidden(!isValueHidden); }}
                    path={isValueHidden
                        ? ICONS.EyeOpen
                        : ICONS.EyeClose}
                />
            )}
        </div>
    );
};
