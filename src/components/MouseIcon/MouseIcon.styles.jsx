import styled from 'styled-components';


export const ScrollDownIcon = styled.div`
    position: absolute;
    margin: 0 auto;
    width: 23px;
    height: 32px;
    bottom: 20px;
` 
 export const MouseBody = styled.div`
    width: 3px;
    padding: 5px 8px;
    height: 18px;
    border: 2px solid #1d1d1d;
    border-radius: 20px;
    opacity: 0.75;
    box-sizing: content-box;
 `
 export const ScrollerPoint = styled.div`
    width: 3px;
    height: 5px;
    border-radius: 100%;
    background-color: #1d1d1d;
    animation-name: scrollAni;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes scrollAni {
        
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(8px); opacity: 0;}
    }
 ` 
