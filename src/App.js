import './App.css';
import { useState } from "react";
import ValidationError from "./components/ValidationError";

const App = () => {
  const [validationError, setValidationError] = useState('');
  const [showValidationError, setShowValidationError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setValidationError('');
    setShowValidationError(false);
    const formData = new FormData(e.currentTarget);
    const emailAddress = formData.get('email_address')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const confirmPassword = formData.get('confirm_password')?.toString() ?? '';
    if (emailAddress.length <= 0) {
      setValidationError('Email address is required');
      setShowValidationError(true);
      return;
    }

    if (password.length <= 0) {
      setValidationError('Password is required');
      setShowValidationError(true);
      return;
    }

    if (password !== confirmPassword) {
      setValidationError('Passwords do not match');
      setShowValidationError(true);
      return;
    }

    localStorage.setItem('auth_data', JSON.stringify({ emailAddress, password }));
    setAuthenticated(true);
  }

  const handleLogout = () => {
    localStorage.removeItem('auth_data');
    setAuthenticated(false);
  }

  return (
    <div id="app-page" className="app-page">
      <header>
        <h1>TST coding exercise</h1>
      </header>
      <main>
        <section>
          {showValidationError && <ValidationError errorMessage={validationError} />}
          {authenticated ? (
              <>
                <div>Authenticated!</div>
                <div>
                  <button type="button" onClick={handleLogout}>Logout</button>
                </div>
              </>
          ) : (
              <form onSubmit={handleLogin} id="login-form" className="login-form">
                <div className="form-group">
                  <label htmlFor="email-address">Email address</label>
                  <input id="email-address" type="email" name="email_address" placeholder="Email address"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input id="confirm-password" type="password" name="confirm_password" placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                  <button type="submit">Register</button>
                </div>
              </form>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
