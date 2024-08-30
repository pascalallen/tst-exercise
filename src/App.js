import './App.css';
import {useEffect, useState} from "react";
import Form from "./components/Form/Form";
import InputControl from "./components/InputControl/InputControl";

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
    showConfirmPassword: false,
    authenticated: false
};

const App = () => {
    const [errors, setErrors] = useState(initialState.errors);
    const [emailAddress, setEmailAddress] = useState(initialState.emailAddress);
    const [password, setPassword] = useState(initialState.password);
    const [confirmPassword, setConfirmPassword] = useState(initialState.confirmPassword);
    const [showPassword, setShowPassword] = useState(initialState.showPassword);
    const [showConfirmPassword, setShowConfirmPassword] = useState(initialState.showConfirmPassword);
    const [authenticated, setAuthenticated] = useState(initialState.authenticated);

    useEffect(() => {
        const authData = localStorage.getItem('auth_data');
        if (authData !== null) {
            setAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (password.length <= 0) {
            setShowPassword(initialState.showPassword);
        }

        if (confirmPassword.length <= 0) {
            setShowConfirmPassword(initialState.showConfirmPassword);
        }
    }, [password, confirmPassword]);

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

        if (password !== confirmPassword) {
            setErrors({...errors, confirmPassword: 'Password confirmation is required'});
            return;
        }

        localStorage.setItem('auth_data', JSON.stringify({emailAddress, password}));
        setAuthenticated(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('auth_data');
        setAuthenticated(false);
    }

    const handleEmailAddressChange = (e) => setEmailAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div id="app-page" className="app-page">
            <header>
                <h1>TST coding exercise</h1>
            </header>
            <main>
                <section>
                    {authenticated ? (
                        <div className="authenticated">
                            <h1>Authenticated!</h1>
                            <div>
                                <button type="button" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    ) : (
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
                            <div className="form-group form-submit">
                                <button
                                    id="register-button"
                                    className="register-button"
                                    type="submit"
                                    tabIndex={4}>
                                    Register
                                </button>
                            </div>
                        </Form>
                    )}
                </section>
            </main>
        </div>
    );
};

export default App;
