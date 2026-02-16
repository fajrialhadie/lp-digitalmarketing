import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import PainPoints from '../components/PainPoints';
import Curriculum from '../components/Curriculum';
import Bio from '../components/Bio';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Hero />
            <VideoSection />
            <PainPoints />
            <Curriculum />
            <Bio />
            <Pricing />
            <Footer />
        </>
    );
};

export default HomePage;
