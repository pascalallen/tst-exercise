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
        password: ''
    },
    emailAddress: '',
    password: '',
    showPassword: false
};

const LoginPage = () => {
    const authService = useAuth();

    const [errors, setErrors] = useState(initialState.errors);
    const [emailAddress, setEmailAddress] = useState(initialState.emailAddress);
    const [password, setPassword] = useState(initialState.password);
    const [showPassword, setShowPassword] = useState(initialState.showPassword);

    useEffect(() => {
        if (authService.isLoggedIn()) {
            return navigate(Path.INDEX);
        }
    }, [authService]);

    useEffect(() => {
        if (password.length <= 0) {
            setShowPassword(initialState.showPassword);
        }
    }, [password]);

    const handleLogin = async (e) => {
        e.preventDefault();

        let newErrors = { ...initialState.errors };

        if (emailAddress.length <= 0) {
            newErrors.emailAddress = 'Email address is required';
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) === false) {
            newErrors.emailAddress = 'Invalid email address';
        }

        if (password.length <= 0) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(item => item.length > 0);
        if (hasErrors) {
            return;
        }

        try {
            await authService.login({ email_address: emailAddress, password: password });
            navigate(Path.INDEX);
        } catch (err) {
            setErrors({ ...newErrors, emailAddress: 'Invalid email address and/or password' });
        }
    };

    const handleEmailAddressChange = (e) => setEmailAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate(Path.REGISTER);
    };

    return (
        <div id="login-page" className="login-page d-flex flex-column vh-100">
            <header className="text-center">
                <h1>Login</h1>
            </header>
            <main className="flex-1">
                <section className="d-grid place-items-center">
                    <Form id="login-form" className="login-form" onSubmit={handleLogin}>
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
                        <div className="form-group form-submit d-flex justify-content-center">
                            <button
                                id="login-button"
                                className="login-button border-0 cursor-pointer"
                                type="submit"
                                tabIndex={3}>
                                Login
                            </button>
                        </div>
                    </Form>
                    <p>Don't have an account yet? <a href={Path.REGISTER} onClick={handleSignUpClick}>Sign up here.</a></p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
