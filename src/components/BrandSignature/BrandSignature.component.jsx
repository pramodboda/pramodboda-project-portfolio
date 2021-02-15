import React from 'react'

import BrandSignatureImgUrl from '../../assets/images/signature-2021-invert.png';

import {BrandSignatureContainer, BrandSignatureImg} from './BrandSignature.styles';

const BrandSignature = () => (
    <BrandSignatureContainer>
        <BrandSignatureImg src={BrandSignatureImgUrl}></BrandSignatureImg>
    </BrandSignatureContainer>
)

export default BrandSignature;
