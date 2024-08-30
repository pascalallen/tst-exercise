import React from 'react';

const FormGroup = (props) => {
    const { children, id, className } = props;

    return (
        <div id={id} className={`form-group ${className}`}>
            {children}
        </div>
    );
};

export default FormGroup;