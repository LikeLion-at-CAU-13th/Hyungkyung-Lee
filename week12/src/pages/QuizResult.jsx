import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { result, score } from './QuizList';
import { pickedAnswer } from './QuizDetail';

const QuizDetail = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState([]);

    const retry = () => {
        pickedAnswer.length = 0;
        navigate('/quizzes');
    }

    useEffect( () => {
        const fetchMessages = async () => {
            const response = await axios.get(`https://week12-api-1cc7.onrender.com/api/result?score=${score}`);
            setMessage(response.data);
        };
        fetchMessages();
    }, []);

    const home = () => {
        pickedAnswer.length = 0;
        navigate('/');
    }

    return (
        <Back>
            <Score> 당신의 점수는 <Highlight>{score}</Highlight>점 입니다!</Score>
            <Message>{message.message}</Message>
            <ResultRow>
                {result.map ((res, i) => (
                    <ResultItem>{i+1}번. {res}</ResultItem>
                ))}
            </ResultRow>
            <ButtonRow>
                <Button onClick={() => retry()}>
                    Retry
                </Button>
                <Button onClick={() => home()}>
                    Home
                </Button>
            </ButtonRow>
        </Back>
    );
};

const Back = styled.div`
    background-color: white;
    border-radius: 50px;
    padding: 75px;
`;

const Score = styled.div `
  font-size: 40px;
  color: #535353;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div `
  font-size: 20px;
  color: #535353;
  font-weight: 600;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.div `
    padding: 10px;
    color: #75b5f5;
`;

const ResultRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`;

const ResultItem = styled.div `
    font-size: 20px;
    font-weight: 500;
    color:  #535353;

`;

const ButtonRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;


export default QuizDetail;