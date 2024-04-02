import { type TFunc } from '../../types';

export interface IImageProps {
    src: string;
    alt?: string;
    defaultImage?: string;
    className?: string;
    isLoading?: boolean;
    onClick?: TFunc;
    withExpandButton?: boolean;
    withPhotoButton?: boolean;
    withButtonOnHover?: boolean;
}
