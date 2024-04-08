import { TFunc } from '../types';

export const tryDecode: TFunc<[string], string> = (content) => {
    try {
        return decodeURI(content);
    } catch (error) {
        return content;
    }
};