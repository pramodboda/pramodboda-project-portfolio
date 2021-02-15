import React from 'react';

import HeroSection from '../components/HeroSection/HeroSection.component';
import GeneralSkills from '../components/GeneralSkills/GeneralSkills.component';
import Footer from '../components/Footer/Footer.component';


const HomePage = () => (
    <div>
    <HeroSection></HeroSection>
    <div className="wrapper"><GeneralSkills></GeneralSkills></div>
    <Footer></Footer>
    </div>
);

export default HomePage;