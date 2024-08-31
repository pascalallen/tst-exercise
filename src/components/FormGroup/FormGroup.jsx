import React from 'react';

const FormGroup = (props) => {
    const { children, id, className } = props;

    return (
        <div id={id} className={`form-group ${className} d-flex flex-column position-relative`}>
            {children}
        </div>
    );
};

export default FormGroup;