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

    const handleLogin = (e) => {
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

        authService.login({
            email_address: emailAddress,
            password: password
        });

        return navigate(Path.INDEX);
    };

    const handleEmailAddressChange = (e) => setEmailAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);

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
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;