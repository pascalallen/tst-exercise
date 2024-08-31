import React from 'react';

const Input = (props) => {
    const {
        id,
        name,
        type,
        className,
        value,
        placeholder,
        tabIndex,
        isValid = true,
        required,
        disabled,
        onChange,
        onBlur,
        ...remaining
    } = props;

    return (
        <input
            id={id}
            className={`form-control ${className} ${!isValid ? 'is-invalid' : ''}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            tabIndex={tabIndex}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            {...remaining}
        />
    );
};

export default Input;