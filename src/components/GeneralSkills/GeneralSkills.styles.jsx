import styled from 'styled-components';

export const GenenralSkillsSection = styled.section`
    padding: 150px 0;

    @media screen and (max-width: 414px){
        padding: 50px 0;
    }
`

export const SecTitle = styled.h4`
    text-align: center;
    padding-bottom: 100px;
    text-transform:uppercase;

    @media screen and (max-width: 414px){
        padding-bottom: 50px;
    }
`

export const SkillItemSpacing = styled.div`
    
    padding: 0 60px;


    @media (max-width: 768px){
        padding: 0 30px;
    }
    @media (max-width: 414px){
        padding: 0;
    }

`