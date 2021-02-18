import React from 'react';


import SocialMedia from '../../components/SocialMedia/SocialMedia.component';


import KeyboardImg from '../../assets/images/keyboard.png';
import PaletteImg1 from '../../assets/images/palette1.png';
import PlantImg from '../../assets/images/plant.png';

import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, KeyboardImgContainer, PaletteImg1Container, PlantImgContainer} from './HeroSection.styles';

import MouseIcon from '../MouseIcon/MouseIcon.component';

import ViewPortHeight from '../../components/ViewPortHeight/ViewPortHeight.component';


const HeroSection = () => {
    console.log(ViewPortHeight());
    return(
        <HeroContainer style={{height: ViewPortHeight()+"px"}}>
            <HeroBg>
                <KeyboardImgContainer src={KeyboardImg} />
                <PaletteImg1Container src={PaletteImg1} />
                <PlantImgContainer src={PlantImg} />

            </HeroBg>

            <HeroContent><HeroH1>Pramod Boda</HeroH1>
                <HeroP>UI/UX Designer   |   Front-End Developer   |   Artist</HeroP>
                <SocialMedia/>
            </HeroContent>
                
            <MouseIcon/>
            
        </HeroContainer>
    )
}

export default HeroSection