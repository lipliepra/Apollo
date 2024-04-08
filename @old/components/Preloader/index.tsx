import React, { FC } from 'react';
import cn from 'classnames';

import './index.scss';

export const Preloader: FC = () => {
    return (
        <div className='preloader'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={cn('preloader-ball', `preloader-ball_${index + 1}`)}
                />
            ))}
        </div>
    );
};