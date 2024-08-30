import React from 'react';
import Feedback from '../Feedback/Feedback';
import FormGroup from '../FormGroup/FormGroup';
import FormLabel from '../FormLabel/FormLabel';
import FormText from '../FormText/FormText';
import Input from '../Input/Input';
import PasswordToggle from "../PasswordToggle/PasswordToggle";

const InputControl = (props) => {
    const {
        type,
        id,
        name,
        className,
        value,
        label,
        placeholder,
        tabIndex,
        passwordToggle,
        error,
        tip,
        inputId,
        labelId,
        errorId,
        tipId,
        autoFocus,
        isValid,
        required,
        disabled,
        theme = {},
        togglePassword,
        onChange,
        onBlur
    } = props;

    return (
        <FormGroup id={id} className={className}>
            {label && (
                <FormLabel id={labelId} className={theme.label} htmlFor={inputId} required={required}>
                    {label}
                </FormLabel>
            )}
            <Input
                id={inputId}
                name={name}
                className={theme.input}
                type={type}
                value={value}
                placeholder={placeholder}
                tabIndex={tabIndex}
                autoFocus={autoFocus}
                isValid={isValid}
                required={required}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
            />
            {passwordToggle && (
                <PasswordToggle className={theme.passwordToggle} onClick={togglePassword}>
                    {passwordToggle}
                </PasswordToggle>
            )}
            {error && (
                <Feedback id={errorId} className={theme.error} isValid={isValid}>
                    {error}
                </Feedback>
            )}
            {!error && tip && (
                <FormText id={tipId} className={theme.tip} block>
                    {tip}
                </FormText>
            )}
        </FormGroup>
    );
};

export default InputControl;