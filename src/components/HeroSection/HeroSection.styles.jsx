import styled from 'styled-components';

export const HeroContainer = styled.section`
position: relative;
background: #1d1d1d;
display: flex;
justify-content: center;
align-items: center;
height: 900px;

z-index: 1;
text-align:center;
`

export const HeroBg = styled.div`
position: absolute;
top:0;
bottom:0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const ImgBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #ccc;
`
export const HeroContent = styled.div`
z-index: 3;

position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
top: 45%;
left:0;
right: 0;
`

export const HeroH1 = styled.h1`
position: relative;
color: #c00101;
text-align: center;
font-family: 'Volkhov', serif;
font-weight: normal;
font-size: 64;


@media screen and (max-width: 768px){

}
`

export const HeroP = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 1.12em;
    font-weight: 300;
`
