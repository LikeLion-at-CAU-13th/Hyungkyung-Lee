import React from 'react';
import styled from 'styled-components';
import mail from '../assets/SNS/mail.png';
import github from '../assets/SNS/github.png';
import instagram from '../assets/SNS/Logo Instagram.png';

const Contact = () => {
    return (
        <MAIN>
            <ITEM>
                <IMG src={mail}/>
                <h3>dlgudrud116@naver.com</h3>
            </ITEM>
            <ITEM>
                <IMG src={mail}/>
                <h3>dlgudrud116@gmail.com</h3>
            </ITEM>
            <ITEM>
                <IMG src={github}/>
                <h3>@Lee-Hyeongkyeong</h3>
            </ITEM>
            <ITEM>
                <IMG src={instagram}/>
                <h3>@dlgudrud116</h3>
            </ITEM>
        </MAIN>
    );
};

const MAIN = styled.nav`
    background-color: rgb(239, 245, 243);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: space-around;
    padding: 160px 65px;
    gap: 50px;
`;

const ITEM = styled.div`
        border-radius: 50px;
        padding: 1px 10px;
        background-color: white;
        display: flex;
        flex-direction: row;
        gap: 10px;
        
        justify-content: space-around;
        height: 120px;
        width: 100%;
        align-items: center;
`;

const IMG = styled.img`
    width: 50px;
    height: auto;
`;

export default Contact;