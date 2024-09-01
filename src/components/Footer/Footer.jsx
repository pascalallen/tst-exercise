import React from 'react';
import useStore from '../../hooks/useStore';

const Footer = () => {
    const userStore = useStore('userStore');

    const clearUserStore = () => userStore.clear();

    return (
        <footer id="footer" className="footer d-flex align-items-center justify-content-center">
            <p className="copyright">© 2024 Pascal Allen</p>
            <a href="#" target="_blank" rel="noreferrer">Terms</a>
            <a href="#" target="_blank" rel="noreferrer">Privacy</a>
            <a className="cursor-pointer" onClick={clearUserStore}>Reset user registry</a>
        </footer>
    );
};

export default Footer;
