import React from 'react';
import { navigate } from '../../utils/navigate';
import useAuth from '../../hooks/useAuth';
import Path from '../../domain/constants/Path';

const Navbar = () => {
    const authService = useAuth();

    const handleLogout = () => {
        authService.logout();
        return navigate(Path.LOGIN);
    };

    return (
        <nav id="navbar" className="navbar d-flex align-items-center justify-content-space-between">
            <a href="/" className="nav-link">Home</a>
            {authService.isLoggedIn() && <button type="button" className="nav-link" onClick={handleLogout}>Logout</button>}
        </nav>
    );
};

export default Navbar;
