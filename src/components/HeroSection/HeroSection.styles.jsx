import styled from 'styled-components';


export const HeroContainer = styled.section`
    display: flex;
    width: 100vw;
    ${'' /* height: 100vh; */}
    position: relative;
    background: #fff;
    justify-content: center;
    align-items: center;
    z-index: 1;
    text-align:center;
    ${'' /* border: 1px solid red; */}
`

export const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


export const PaletteImg1Container = styled.img`
    position: absolute;
    top: -390px;
    width: 1140px;
    left: -500px;
    z-index: 2;

    @media screen and (max-width: 1366px){
        width: 1120px;
    }

    @media screen and (max-width: 1024px) and (max-height: 768px){
        width: 990px;
    }
    @media screen and (max-width: 768px){
        width: 1100px;
        top: -460px;
        left: -530px;
    }
    @media screen and (max-width: 768px) and (max-height: 1024px){
        width: 1000px;
        
    }
    @media screen and (max-width: 540px){
        top: -120px;
        width: 460px;
        left: -200px;
    }
    @media screen and (max-width: 375px){
        top: -140px;
    }
    @media screen and (max-width: 375px) and (max-height: 812px){
        width: 480px;
    }
    @media screen and (max-width: 360px){
        width: 450px;
    }

        
    @media screen and (max-width: 320px){
        width: 400px;
        right: -225px;
    }

    @media screen and (max-width: 280px){
        top: -100px;
        width: 360px;
        left: -150px;
    }
    
`
export const PlantImgContainer = styled.img`
    position: absolute;
    top: 70px;
    right: 40px;
    width: 560px;
    z-index: 2;

    @media screen and (max-width: 1366px){
        width: 500px;
        top: 60px;
        right: 80px;
    }



    @media screen and (max-width: 1024px){
        width: 560px;
        top: 240px;
        right: -110px;
    }

    @media screen and (max-width: 1024px) and (max-height: 768px){
        width: 500px;
        top: 40px;
    }

    @media screen and (max-width: 768px){
        top: 130px;
        right: -200px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px){
        width: 500px;
        top: 70px;
    }

    @media screen and (max-width: 540px){
        width: 300px;
        top: 90px;
        right: -100px;
    }
    @media screen and (max-width: 414px){
        top: 130px;
    }

    @media screen and (max-width: 375px){
        top: 170px;
    }
    @media screen and (max-width: 375px) and (max-height:667px){
        top: 120px;
        right: -120px;
    }

    @media screen and (max-width: 360px){
        width: 270px;
        right: -110px;
    }

    @media screen and (max-width: 320px){
        display: none;
        width: 230px;
        top: 80px;
        right: -90px
    }

    @media screen and (max-width: 280px){
        width: 190px;
        top: 140px;
        right: -80px;
    }
`

export const KeyboardImgContainer = styled.img`
    position: absolute;
    bottom: 20px;
    right: -440px;
    width: 900px;
    z-index: 3;

    @media screen and (max-width: 1366px){
        width: 820px;
    }

    @media screen and (max-width: 1024px){
        width: 860px;
        bottom: 100px;
    }

    @media screen and (max-width: 1024px) and (max-height: 768px){
        width: 700px;
        bottom: 20px;
    }



    @media screen and (max-width: 768px){
        width: 860px;
        bottom: 20px;
        right: -500px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px){
        width: 660px;
        bottom: 20px;
        right: -380px;
    }
    
    @media screen and (max-width: 540px){
        width: 450px;
        right: -260px;
        bottom: 20px;
    }

    @media screen and (max-width: 414px){
        bottom: 70px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px){
        bottom: 20px;
        right: -280px;
    }

    @media screen and (max-width: 360px){
        width: 400px;
        right: -250px;
    }

    @media screen and (max-width: 320px) {
        top: -10px;
        width: 320px;
        right: -220px;
    }

    @media screen and (max-width: 280px){
        width: 290px;
        bottom: 70px;
        right: -170px;
    }
`

export const HeroContent = styled.div`
    display: flex;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
    top: 0;
    left:0;
    right: 0;
    z-index: 3;

    ${'' /* margin-top: 42.5vh; */}
    margin-top: 50vh;
    transform: translate(0, -80px);
`

export const HeroH1 = styled.h1`
position: relative;
color: #c00101;
text-align: center;
font-family: 'Volkhov', serif;
font-weight: normal;
font-size: 64;


@media screen and (max-width: 414px){
    font-size: 2.1em;
}
`

export const HeroP = styled.p`
    color: #999;
    text-transform: uppercase;
    font-size: 1.12rem;
    font-weight: 300;


    @media screen and (max-width: 414px){
        font-size: 0.6em;
    }

    
`
