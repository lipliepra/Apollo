import React, { type FC } from 'react';
import cn from 'classnames';

import { NOOP } from '../../../constants';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { type IImageProps } from '../types';
import '../index.scss';

export const WithExpandButton = (Component: FC<IImageProps>) => (props: IImageProps) => {
    const {
        withExpandButton = false,
        withPhotoButton = false,
        withButtonOnHover = false,
        onClick = NOOP,
        className,
    } = props;

    const generatedCls = generateCLassNames({
        block: 'apollo-image',
        elem: 'button',
        mods: {
            expand: withExpandButton,
            photo: withPhotoButton,
            'on-hover': withButtonOnHover,
        },
    });

    if (withExpandButton || withPhotoButton) {
        return (
            <div className={cn('apollo-image', className)}>
                <Component {...props} />

                <div
                    className={generatedCls}
                    onClick={onClick}
                />
            </div>
        );
    }

    return <Component {...props} />;
};
