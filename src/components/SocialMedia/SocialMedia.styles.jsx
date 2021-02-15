import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const LinkItems = styled.div`
display: flex;
flex-container: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 260px;
 box-sizing: border-box;
 color: red;
`

export const LinkItem = styled(Link)`
padding:30px;
font-size: 25px;
color: #999;
transition: all .3s ease-in-out;

:hover{
    color: #1d1d1d;
}
`