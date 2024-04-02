import React, {
    Fragment,
    useCallback,
    useEffect,
    useState,
} from 'react';
import cn from 'classnames';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import EmptyImageIcon from '../../../assets/icons/svg/emptyImage.svg?url';
import { RuntimeStatuses } from '../../../enums';
import { type TNullable } from '../../../types';
import { WithExpandButton } from '../hocs/WithExpandButton';
import { type IImageProps } from '../types';

const ImageComponent: React.FC<IImageProps> = ({
    src,
    alt = '',
    defaultImage = '',
    isLoading = false,
    className = '',
}) => {
    const [imageStatus, setImageStatus] = useState<TNullable<RuntimeStatuses>>(null);

    useEffect(() => {
        if (!src && !defaultImage) {
            setImageStatus(RuntimeStatuses.Error);
        }
    }, []);

    const onLoadHandler = useCallback(() => {
        setImageStatus(RuntimeStatuses.Ready);
    }, []);

    const onAbortHandler = useCallback(() => {
        setImageStatus(RuntimeStatuses.Loading);
    }, []);

    const renderImage = () => {
        if (imageStatus === RuntimeStatuses.Error) return defaultImage || String(EmptyImageIcon);

        return src || defaultImage;
    };

    return (
        <Fragment>
            {(isLoading || !(imageStatus === RuntimeStatuses.Ready || imageStatus === RuntimeStatuses.Error)) && (
                <div className={cn('apollo-image__loader', className)} />
            )}

            <img
                alt={alt}
                onError={onAbortHandler}
                onLoad={onLoadHandler}
                src={renderImage()}
                className={cn(
                    'apollo-image',
                    className,
                    { 'apollo-image_hidden': !(imageStatus === RuntimeStatuses.Ready && !isLoading) },
                )}
            />
        </Fragment>
    );
};

export default WithExpandButton(ImageComponent);
