import React from 'react';
import { goBack } from '../utils/navigate';
import Footer from '../components/Footer/Footer';

const NotFoundPage = () => {
    return (
        <div id="not-found-page" className="not-found-page d-flex flex-column vh-100">
            <header className="text-center">
                <h1>Page Not Found</h1>
            </header>
            <main className="flex-1">
                <section className="d-grid place-items-center">
                    <button className="border-0 cursor-pointer" type="button" onClick={goBack}>Go back</button>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;