import React from 'react';
import Path from '../domain/constants/Path';
import IndexPage from '../pages/IndexPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RequiresAuthentication from './middleware/RequiresAuthentication';

const routes = [
    {
        path: Path.INDEX,
        element: (
            <RequiresAuthentication>
                <IndexPage/>
            </RequiresAuthentication>
        )
    },
    {
        path: Path.REGISTER,
        element: <RegisterPage/>
    },
    {
        path: Path.LOGIN,
        element: <LoginPage/>
    },
    {
        path: Path.NOT_FOUND,
        element: <NotFoundPage/>
    }
];

export default routes;
