import React, { useEffect, useState } from 'react';
import { navigate } from '../utils/navigate';
import useAuth from '../hooks/useAuth';
import Path from '../domain/constants/Path';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import InputControl from '../components/InputControl/InputControl';

const initialState = {
    errors: {
        emailAddress: '',
        password: '',
        confirmPassword: ''
    },
    emailAddress: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
};

const RegisterPage = () => {
    const authService = useAuth();

    const [errors, setErrors] = useState(initialState.errors);
    const [emailAddress, setEmailAddress] = useState(initialState.emailAddress);
    const [password, setPassword] = useState(initialState.password);
    const [confirmPassword, setConfirmPassword] = useState(initialState.confirmPassword);
    const [showPassword, setShowPassword] = useState(initialState.showPassword);
    const [showConfirmPassword, setShowConfirmPassword] = useState(initialState.showConfirmPassword);

    useEffect(() => {
        if (authService.isLoggedIn()) {
            return navigate(Path.INDEX);
        }
    }, [authService]);

    useEffect(() => {
        if (password.length <= 0) {
            setShowPassword(initialState.showPassword);
        }

        if (confirmPassword.length <= 0) {
            setShowConfirmPassword(initialState.showConfirmPassword);
        }
    }, [password, confirmPassword]);

    const handleRegistration = (e) => {
        e.preventDefault();

        setErrors(initialState.errors);

        if (emailAddress.length <= 0) {
            setErrors({...errors, emailAddress: 'Email address is required'});
            return;
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) === false) {
            setErrors({...errors, emailAddress: 'Invalid email address'});
            return;
        }

        if (password.length <= 0) {
            setErrors({...errors, password: 'Password is required'});
            return;
        }

        if (password !== confirmPassword) {
            setErrors({...errors, confirmPassword: 'Password confirmation is required'});
            return;
        }

        authService.register({
            email_address: emailAddress,
            password: password,
            confirm_password: confirmPassword
        });

        return navigate(Path.INDEX);
    };

    const handleEmailAddressChange = (e) => setEmailAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div id="register-page" className="register-page d-flex flex-column vh-100">
            <header className="text-center">
                <h1>Register</h1>
            </header>
            <main className="flex-1">
                <section className="d-grid place-items-center">
                    <Form id="register-form" className="register-form" onSubmit={handleRegistration}>
                        <InputControl
                            inputId="email-address"
                            className="email-address"
                            name="email_address"
                            type="email"
                            label="Email address"
                            tabIndex={1}
                            value={emailAddress}
                            isValid={errors.emailAddress.length <= 0}
                            error={errors.emailAddress.length > 0 && errors.emailAddress}
                            onChange={handleEmailAddressChange}
                            required
                            autoFocus
                        />
                        <InputControl
                            inputId="password"
                            className="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            tabIndex={2}
                            value={password}
                            isValid={errors.password.length <= 0}
                            passwordToggle={password.length > 0 && (showPassword ? 'Hide' : 'Show')}
                            error={errors.password.length > 0 && errors.password}
                            togglePassword={toggleShowPassword}
                            onChange={handlePasswordChange}
                            required
                        />
                        <InputControl
                            inputId="confirm-password"
                            className="confirm-password"
                            name="confirm_password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            label="Confirm password"
                            tabIndex={3}
                            value={confirmPassword}
                            isValid={errors.confirmPassword.length <= 0}
                            passwordToggle={confirmPassword.length > 0 && (showConfirmPassword ? 'Hide' : 'Show')}
                            error={errors.confirmPassword.length > 0 && errors.confirmPassword}
                            togglePassword={toggleShowConfirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        <div className="form-group form-submit d-flex justify-content-center">
                            <button
                                id="register-button"
                                className="register-button border-0 cursor-pointer"
                                type="submit"
                                tabIndex={4}>
                                Register
                            </button>
                        </div>
                    </Form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default RegisterPage;