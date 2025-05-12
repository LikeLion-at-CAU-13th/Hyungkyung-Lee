import React from 'react';
import styled from 'styled-components';
import desk from '../assets/deskset_hanggang.png';

const Home = () => {
    return (
        <MAIN>
           <IMG src={desk}></IMG> 
        </MAIN>
    );
};

const MAIN = styled.nav`
    background-color: rgb(239, 245, 243);
    display: flex;
    justify-content: space-around;
    padding: 160px 65px;
`;

const IMG = styled.img`
    width: 90%; 
    height: auto
`;

export default Home;