
import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import TrustedBy from '../components/landing/TrustedBy';
import ModulesGrid from '../components/landing/ModulesGrid';
import Footer from '../components/landing/Footer';
import modulesData from '../data/modules.json';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
                <TrustedBy />
                <ModulesGrid modules={modulesData.modules} />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
