import React from 'react';

const FormText = (props) => {
    const { children, id, className, block = true } = props;

    const fullClassName = ['form-text', className].filter(Boolean).join(' ');

    return React.createElement(
        block ? 'div' : 'span',
        { id: id, className: fullClassName },
        children
    );
};

export default FormText;
