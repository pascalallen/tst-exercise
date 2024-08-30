import React from 'react';

const Feedback = (props) => {
    const { children, id, className, isValid = true } = props;

    return (
        <div id={id} className={`${isValid ? 'valid-feedback' : 'invalid-feedback'} ${className}`}>
            {children}
        </div>
    );
};

export default Feedback;