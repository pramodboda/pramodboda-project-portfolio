import React from 'react';

import {FootnoteContainer, FootnoteContent} from './Footnote.styles';

const Footnote = () => {
    let presentDate= new Date();
    let currentYear = presentDate.getFullYear()
    return(
        <FootnoteContainer>
        <FootnoteContent>@{currentYear} Pramodize Studio. All rights reserved.</FootnoteContent>
    </FootnoteContainer>
    )
}



export default Footnote;