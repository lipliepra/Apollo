import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    type TFunc,
    type TNullable,
    type TSetAction,
} from '../types';

export type TUseBase64ImageUrlByFile = (
    TFunc<[TNullable<File> | undefined], [TNullable<string> | undefined, TSetAction<TNullable<string> | undefined>]>);

/**
 * Хук useBase64ImageUrlByFile позволяет преобразовать файл изображения в строку Base64 и получить его URL.
 *
 * Принимает один аргумент:
 * - image - Файл изображения, который необходимо преобразовать.
 *
 * Принцип работы:
 * - Возвращает массив из двух элементов:
 * - URL изображения в формате Base64 или undefined, если изображение еще не загружено
 * - Функция для установки URL изображения.
 */
export const useBase64ImageUrlByFile: TUseBase64ImageUrlByFile = (image) => {
    const [base64ImageUrl, setBase64ImageUrl] = useState<TNullable<string>>(undefined);

    const readerRef = useRef<FileReader>(new FileReader());

    useEffect(() => {
        const setLoadedImage = (event: ProgressEvent<FileReader>) => {
            if (event.target?.result && typeof event.target.result === 'string') {
                setBase64ImageUrl(event.target.result);
            }
        };

        readerRef.current.addEventListener('load', setLoadedImage);

        return () => {
            readerRef.current.removeEventListener('load', setLoadedImage);
        };
    }, []);

    useEffect(() => {
        if (image) {
            readerRef.current.readAsDataURL(image);
        }
    }, [image]);

    return [
        base64ImageUrl,
        setBase64ImageUrl,
    ];
};
