import React from 'react';

import {FooterContainer, FooterContent} from './Footer.styles';
import Footnote from './Footnote/Footnote.component';


import PramodizeLogo from '../PramodizeLogo/PramodizeLogo.component';
import BrandSignature from '../BrandSignature/BrandSignature.component';

const Footer = () => (

    <footer>
        <FooterContainer>
            <FooterContent>
                <PramodizeLogo/>
                <BrandSignature/>
            </FooterContent>
            <Footnote></Footnote>
        </FooterContainer>
    </footer>
    
)

export default Footer;