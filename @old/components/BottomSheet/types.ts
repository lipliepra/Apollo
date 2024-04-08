import {
    TFunc,
    TRef,
} from '../../types';

export interface IBottomSheetProps {
    isShow: boolean;
    setIsShow: TFunc<[boolean]>;
    dataTestId: string;
    maxWidth?: number;
    reactRef?: TRef;
}

interface IInfo {
    x: number;
    y: number;
}

export interface IBottomSheetInfo {
    delta: IInfo;
    offset: IInfo;
    point: IInfo;
    velocity: IInfo;
}
