import { FC } from 'react';
import { Toaster as Toast } from 'react-hot-toast';

export const Toaster: FC = () => (
    <Toast
        reverseOrder
        containerStyle={{
            position: 'fixed',
            bottom: 80,
            left: 20,
        }}
    />
);
