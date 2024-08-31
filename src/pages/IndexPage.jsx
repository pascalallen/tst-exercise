import React, { useEffect } from 'react';
import { navigate } from '../utils/navigate';
import useAuth from '../hooks/useAuth';
import Path from '../domain/constants/Path';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
    const authService = useAuth();

    useEffect(() => {
        if (!authService.isLoggedIn()) {
            return navigate(Path.LOGIN);
        }
    }, [authService]);

    return (
        <div id="index-page" className="index-page d-flex flex-column vh-100">
            <header className="text-center">
                <Navbar/>
                <h1>Home</h1>
            </header>
            <main className="flex-1">
                <section className="d-grid place-items-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad alias debitis dignissimos et ex
                        facere facilis illum neque nulla perferendis quidem, quis quisquam quos repudiandae suscipit
                        totam veritatis voluptatum!
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default IndexPage;
