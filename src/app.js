import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/app.css';
import IndexPage from './pages/IndexPage';

const container = document.getElementById('root');
if (container === null) {
    throw new Error('No matching element found with ID: root');
}

const App = () => {
    return (
        <React.StrictMode>
            <IndexPage />
        </React.StrictMode>
    );
};

const root = createRoot(container);
root.render(<App />);
