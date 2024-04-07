import {
    useLayoutEffect,
    useState,
} from 'react';
import { Router as DefaultRouter } from 'react-router-dom';

import { type CFC } from '../../types';
import { navigator } from '../../utils/navigator';

export const Router: CFC = ({ children }) => {
    const [state, setState] = useState({
        action: navigator.action,
        location: navigator.location,
    });

    useLayoutEffect(() => navigator.listen(setState), []);

    return (
        <DefaultRouter
            location={state.location}
            navigationType={state.action}
            navigator={navigator}
        >
            {children}
        </DefaultRouter>
    );
};
