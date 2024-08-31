import React, { useEffect, useState } from 'react';
import { navigate } from '../../utils/navigate';
import useAuth from '../../hooks/useAuth';
import Path from '../../domain/constants/Path';

const initialState = {
    redirect: false
};

const RequiresAuthentication = (props) => {
    const { children } = props;

    const authService = useAuth();

    const [redirect, setRedirect] = useState(initialState.redirect);

    useEffect(() => {
        if (!authService.isLoggedIn()) {
            setRedirect(true);
            navigate(Path.LOGIN);
        }
    }, [authService]);

    if (!authService.isLoggedIn() && redirect) {
        return null;
    }

    return <>{children}</>;
};

export default RequiresAuthentication;
