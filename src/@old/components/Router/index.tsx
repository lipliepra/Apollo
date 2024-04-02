import React, {
    useLayoutEffect,
    useState,
} from 'react';
import { Router as DefaultRouter } from 'react-router-dom';

import { CFC } from '../../types';
import { navigation } from '../../../common/utils/navigation';

export const Router: CFC = ({ children }) => {
    const [state, setState] = useState({
        action: navigation.action,
        location: navigation.location,
    });

    useLayoutEffect(() => navigation.listen(setState), []);

    return (
        <DefaultRouter
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={navigation}
        />
    );
};
