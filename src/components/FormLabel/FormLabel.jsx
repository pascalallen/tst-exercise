import React from 'react';

const FormLabel = (props) => {
    const { children, id, htmlFor, className, required } = props;

    return (
        <label id={id} className={`form-label ${className}`} htmlFor={htmlFor}>
            {children}
            {required && <span className="text-danger">*</span>}
        </label>
    );
};

export default FormLabel;
