import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import instagram from '../assets/SNS/Logo Instagram.png';
import youtube from '../assets/SNS/Logo YouTube.png';
import linkedin from '../assets/SNS/LinkedIn.png';
import naverblog from '../assets/SNS/Logo Naverblog.png';
import velog from '../assets/SNS/Logo velog.png';

const Footer = () => {
    return (
        <Foot>
            <SNS>
                <SNSLink to="https://www.instagram.com/dlgudrud116/">
                    <SNSImg src={instagram} alt="hanggang's instagram"></SNSImg>
                </SNSLink>
                <SNSLink to="https://www.youtube.com/@hanggang2da">
                    <SNSImg src={youtube} alt="hanggang's youtube"></SNSImg>
                </SNSLink>
                <SNSLink to="https://www.linkedin.com/in/hyeongkyeong-lee-b906b2216/">
                    <SNSImg src={linkedin} alt="hanggang's linkedin"></SNSImg>
                </SNSLink>
                <SNSLink to="https://blog.naver.com/dlgudrud116">
                    <SNSImg src={naverblog} alt="hanggang's naver blog"></SNSImg>
                </SNSLink>
                <SNSLink to="https://velog.io/@hanggang/posts">
                    <SNSImg src={velog} alt="hanggang's velog"></SNSImg>
                </SNSLink>
            </SNS>
            <br></br>
            <MSG>
                <p>design inspired by interactive developer Jongmin Kim</p>
            </MSG>
        </Foot>
    );
};

const Foot = styled.nav`
    padding: 35px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SNS = styled.nav`
    justify-content: center;
    display: flex;
    gap: 20px;
`;

const SNSLink = styled(Link)`
//   border: 2px solid orange;
//   padding: 4px 8px;
//   display: flex;
//   align-items: center;
`;

const SNSImg = styled.img`
    width: 30px;
    height: auto;
`;

const MSG = styled.p`
    font-family: 'Times New Roman', Times, serif;
`;

export default Footer;