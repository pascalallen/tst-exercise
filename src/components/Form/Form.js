import React from 'react';

const Form = (props) => {
    const { children, id, className, autoComplete = false, noValidate = true, onSubmit } = props;

    return (
        <form
            id={id}
            className={className}
            autoComplete={autoComplete ? 'on' : 'off'}
            noValidate={noValidate}
            onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;