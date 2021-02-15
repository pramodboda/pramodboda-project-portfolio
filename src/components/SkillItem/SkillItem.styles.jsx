import styled from 'styled-components';

export const SkillItemContainer = styled.div`
${'' /* border: 1px solid red; */}
`



export const SkillTitle = styled.span`
color: #1d1d1d;
`
export const PercentageTxt = styled.span`
display: flex;
color: #1d1d1d;
justify-content: flex-end;
`

export const ProgressBarRoot = styled.div`
position: relative;
display: flex;
height: 18px;
width: 100%;
background: #ccc;
margin-bottom: 50px;
`

export const ProgressBar = styled.div`
position: absolute;
height: 18px;
width: ${props => props.percentage};
top:0;
background: #1d1d1d;
`