import { TFunc } from '../../types';

export interface IPhotoViewerProps {
    photos: Array<string>;
    startIndex: number;
    onClose: TFunc;
    dataTestId: string;
}