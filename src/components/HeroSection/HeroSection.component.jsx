import React from 'react';


import SocialMedia from '../../components/SocialMedia/SocialMedia.component';

import HeroBgImg from '../../assets/images/hero-cover.png';
import {HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP} from './HeroSection.styles';

import MouseIcon from '../MouseIcon/MouseIcon.components';

const HeroSection = () => {
    
    return(
        <HeroContainer>

        <HeroBg>
            <ImgBg src={HeroBgImg}/>
            <HeroContent><HeroH1>Pramod Boda</HeroH1>
                <HeroP>UI/UX Designer   |   Front-End Developer   |   Artist</HeroP>
                <SocialMedia/>
    
    
            </HeroContent>
    
        </HeroBg>
                    <MouseIcon/>
        </HeroContainer>
    )
}

export default HeroSection