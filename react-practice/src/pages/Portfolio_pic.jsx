import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sadicon from '../assets/sadlikealion_logo_by_hanggang.png';

const Portfolio_pic = () => {
    return (
        <MAIN>
            <SUBHEADER>
                <Navitem to='/portfolio_sw'>Software</Navitem>
                <Navitem to='/portfolio_pic'>Video / Photo</Navitem>
                <Navitem to='/portfolio_de'>Design</Navitem>
                <Navitem to='/portfolio_cook'>Cooking</Navitem>
            </SUBHEADER>
            <MSG>
                <IMG src={sadicon}/>
                <h1>준비 중입니다.. :(</h1>
            </MSG>
        </MAIN>
    );
};

const SUBHEADER = styled.nav`
    background-color: white;
    color:  rgb(175, 202, 191);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 10px;
    font-family: 'PretendardVariable';
    font-weight: bold;
`;

const Navitem = styled(Link)`
    font-family: 'PretendardVariable';
    font-size: 20px;
    color: rgb(175, 202, 191);
    padding: 10px;
    
    &:hover {
        text-decoration: underline;
    }
`;

const MAIN = styled.nav`
    background-color: rgb(239, 245, 243);
    
`;

const IMG = styled.img`
    width: 160px;
    height: auto;
`;

const MSG = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160px 65px;
`;

export default Portfolio_pic;