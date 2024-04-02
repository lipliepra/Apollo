import {
    type FC,
    useState,
} from 'react';

import { ICONS } from '../../../../assets';
import { generateCLassNames } from '../../../../utils/generateClassNames';
import { Icon } from '../../../Icon';
import { type IInputProps } from '../../types';

export const HiddenValue: FC<IInputProps> = (props) => {
    const {
        dataTestId,
        value,
        isFullWidth,
        emptyCaption = '',
        className = '',
        withHidden = false,
    } = props;

    const [isValueHidden, setIsValueHidden] = useState<boolean>(withHidden);

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

    const renderHiddenValue = () => {
        if (isValueHidden && value) return Array.from({ length: 10 }).fill('*').join('');

        return value || emptyCaption;
    };

    return (
        <div className={generatedCls}>
            <span className='apollo-input__view-text'>{renderHiddenValue()}</span>

            {value && (
                <Icon
                    className='apollo-input__view-icon'
                    dataTestId={`${dataTestId}Hidden`}
                    onClick={() => { setIsValueHidden(!isValueHidden); }}
                    path={isValueHidden
                        ? ICONS.EyeOpen
                        : ICONS.EyeClose}
                />
            )}
        </div>
    );
};
