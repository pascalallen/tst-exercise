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

    const handleRegistration = async (e) => {
        e.preventDefault();

        let newErrors = {...initialState.errors};

        if (emailAddress.length <= 0) {
            newErrors.emailAddress = 'Email address is required';
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) === false) {
            newErrors.emailAddress = 'Invalid email address';
        }

        if (password.length <= 0) {
            newErrors.password = 'Password is required';
        }

        if (confirmPassword.length <= 0) {
            newErrors.confirmPassword = 'Password confirmation is required';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        let hasErrors = Object.values(newErrors).some(item => item.length > 0);
        if (hasErrors) {
            return;
        }

        try {
            await authService.register({
                email_address: emailAddress,
                password: password,
                confirm_password: confirmPassword
            });
            navigate(Path.INDEX);
        } catch (err) {
            setErrors({ ...newErrors, emailAddress: 'Invalid email address and/or password' });
        }
    };

    const handleEmailAddressChange = (e) => setEmailAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleSignInClick = (e) => {
        e.preventDefault();
        navigate(Path.LOGIN);
    };

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
                    <p>Already have an account? <a href={Path.LOGIN} onClick={handleSignInClick}>Log in here.</a></p>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default RegisterPage;
