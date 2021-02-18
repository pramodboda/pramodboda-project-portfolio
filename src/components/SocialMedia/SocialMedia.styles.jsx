import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const LinkItems = styled.div`
    display: flex;
    flex-container: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 220px;
    box-sizing: border-box;
    color: red;
`

export const LinkItem = styled(Link)`
    width: 90px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 25px;
    color: #999;
    transition: all .3s ease-in-out;

    :hover{
        color: #1d1d1d;
    }
`