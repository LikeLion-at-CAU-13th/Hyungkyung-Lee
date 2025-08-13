import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import instagram from '../assets/SNS/Logo Instagram.png';
import youtube from '../assets/SNS/Logo YouTube.png';
import linkedin from '../assets/SNS/LinkedIn.png';
import naverblog from '../assets/SNS/Logo Naverblog.png';
import velog from '../assets/SNS/Logo velog.png';

const Footer = () => {
    return (
        <Foot>
            <SNS>
                <SNSLink>
                    <SNSImg src={instagram} alt="hanggang's instagram"></SNSImg>
                </SNSLink>
                <SNSLink>
                    <SNSImg src={youtube} alt="hanggang's youtube"></SNSImg>
                </SNSLink>
                <SNSLink>
                    <SNSImg src={linkedin} alt="hanggang's linkedin"></SNSImg>
                </SNSLink>
                <SNSLink>
                    <SNSImg src={naverblog} alt="hanggang's naver blog"></SNSImg>
                </SNSLink>
                <SNSLink>
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

const Foot = styled.div`
    padding: 35px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SNS = styled.div`
    justify-content: center;
    display: flex;
    gap: 20px;
`;

const SNSLink = styled.div`
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