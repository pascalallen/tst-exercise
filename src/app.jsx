import React from 'react';
import { createRoot } from 'react-dom/client';
import { storesInstance, StoresProvider } from './stores/Stores';
import Router from "./routes/Router";
import './assets/css/app.css';

const container = document.getElementById('root');
if (container === null) {
    throw new Error('No matching element found with ID: root');
}

const App = () => {
    return (
        <React.StrictMode>
            <StoresProvider value={storesInstance}>
                <Router />
            </StoresProvider>
        </React.StrictMode>
    );
};

const root = createRoot(container);
root.render(<App />);
