import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-sora', 'px-4', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
