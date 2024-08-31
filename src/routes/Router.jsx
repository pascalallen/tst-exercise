import React, { useEffect, useState } from 'react';
import routes from './routes';
import Path from "../domain/constants/Path";

const Router = () => {
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentRoute(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    const route = routes.find(r => r.path === currentRoute);

    return route ? route.element : routes.find(r => r.path === Path.NOT_FOUND)?.element;
};

export default Router;