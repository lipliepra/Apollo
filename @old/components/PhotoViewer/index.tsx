import {
    type FC,
    Fragment,
    useEffect,
    useState,
} from 'react';
import cn from 'classnames';
import {
    AnimatePresence,
    motion,
} from 'framer-motion';

import { ICONS } from '../../assets';
import { useDisableScroll } from '../../hooks/useDisableScroll';
import { type TFunc } from '../../types';
import { ApolloButton } from '../Button';
import { Image } from '../Image';
import { type IPhotoViewerProps } from './types';
import './index.scss';

export const PhotoViewer: FC<IPhotoViewerProps> = ({
    photos,
    startIndex,
    onClose,
    dataTestId,
}) => {
    const isMultiplePhotos = photos.length && photos.length > 1;

    const [currentIndex, setCurrentIndex] = useState<number>(null);

    useDisableScroll(!!startIndex);

    useEffect(() => {
        if (startIndex !== null) setCurrentIndex(startIndex);
    }, [startIndex]);

    const openNewPhotoHandler: TFunc<[boolean?], TFunc> = (isPrev = false) => () => {
        setCurrentIndex(isPrev
            ? (currentIndex - 1 + photos.length) % photos.length
            : (currentIndex + 1) % photos.length);
    };

    const onCloseHandler = () => {
        onClose();
        setCurrentIndex(null);
    };

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    animate={{ opacity: 1 }}
                    className='apollo-photo-viewer'
                    data-test-id={`${dataTestId}PhotoSlider`}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                >
                    <div className='apollo-photo-viewer__container'>
                        <Image
                            className='apollo-photo-viewer__image'
                            src={photos[currentIndex]}
                        />
                    </div>

                    {isMultiplePhotos && (
                        <Fragment>
                            <ApolloButton
                                className={cn('apollo-photo-viewer__button', 'apollo-photo-viewer__button_prev')}
                                dataTestId={`${dataTestId}SetPrevIndexPhotoSlider`}
                                iconPrefix={ICONS.ChevronLeft}
                                onClick={openNewPhotoHandler(true)}
                            />

                            <ApolloButton
                                className={cn('apollo-photo-viewer__button', 'apollo-photo-viewer__button_next')}
                                dataTestId={`${dataTestId}SetNextIndexPhotoSlider`}
                                iconPrefix={ICONS.ChevronRight}
                                onClick={openNewPhotoHandler()}
                            />
                        </Fragment>
                    )}

                    <ApolloButton
                        className='apollo-photo-viewer__close-button'
                        dataTestId={`${dataTestId}PhotoSlider`}
                        iconPrefix={ICONS.Cross}
                        onClick={onCloseHandler}
                        size='md'
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
