import React from 'react';

const PasswordToggle = (props) => {
    const { children, className, onClick } = props;

    return (
        <span className={`password-toggle ${className}`} onClick={onClick}>
            {children}
        </span>
    );
};

export default PasswordToggle;