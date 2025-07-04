import React from 'react';
import styled from 'styled-components';
import myimage from '../assets/Photo_Lhk.jpg';

const About = () => {
    return (
        <MAIN>
            <IMG src={myimage}></IMG>
            <INTRO>
                    <h4>안녕하세요<span class="highlight_intro">멋쟁이 아기사자 13기 이형경</span>입니다 :)</h4>
                <ul>
                    <li>영어교육과 20학번 / 소프트웨어학부 복수전공</li>
                    <li>멋쟁이 사자처럼 13기 프론트엔드</li>
                    <li>Dance P.O.zz 하우스 & 락킹</li>
                    <li>이번 학기 막학기 졸업은 몰?루👀</li>
                </ul>
            </INTRO>
        </MAIN>
    );
};

const MAIN = styled.nav`
    background-color: rgb(239, 245, 243);
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 160px 65px;
`;

const IMG = styled.img`
    border: 10px solid rgb(175, 202, 191);
    height: 330px;
`;

const INTRO = styled.nav`
    color: rgb(134, 134, 134);
    font-family: 'PretendardVariable';
    font-weight: 300;
    font-size: 20px;
    padding: 25px;
`;

export default About;