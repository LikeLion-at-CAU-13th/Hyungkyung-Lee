import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { pickedAnswer } from './QuizDetail';

const rightAnswer = [0, 2, 1, 0, 0];
export let score = 0;
export const result = [];

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    const goHome= () => {
        navigate("/");
    }


    useEffect( () => {
        const fetchQuizzes = async () => {
            const response = await axios.get(`https://week12-api-1cc7.onrender.com/api/questions`);
            setQuizzes(response.data);
        };
        fetchQuizzes();
    }, []);


    const submitAnswer = () => {

        const hasEmpty = Array.from({length: pickedAnswer.length}).some((_, idx) =>
            !(idx in pickedAnswer) || pickedAnswer[idx] === "" || pickedAnswer[idx] === null || pickedAnswer[idx] === undefined
          );

        if (pickedAnswer.length === 0 || hasEmpty || pickedAnswer.length < 5) {
            console.log(pickedAnswer);
            console.log(pickedAnswer.length);
            alert("설문을 다 진행하지 않았습니다!"); 
        } else {
            for (let i=0; i<5; i++) {
                if (pickedAnswer[i] === rightAnswer[i]) {
                    score++;
                    result[i] = "⭕";
                } else {
                    result[i] = "❌"
                }
            }
            console.log(score);
            navigate("/quiz-result");
        }
    }

    
    return (
        <MenuDom>
            <QuizListDom>
                <Title onClick={goHome}>🏠</Title>
                <Title>
                    Quiz List 🦁
                </Title>
                <p>퀴즈를 다 풀었다면 아래 Submit 버튼을 눌러주세요!</p>
                <ul>
                    {quizzes.map((quiz) => (
                        <Link key = {quiz.id} to={`/quizzes/${quiz.id}`}>
                            <li>Q.{quiz.id + 1}</li>
                        </Link>
                    ))}
                </ul>
                <Button onClick={() => submitAnswer()}>
                    Submit
                </Button>
            </QuizListDom>
            <QuizDetailDom>
                <Outlet />
            </QuizDetailDom>
        </MenuDom>
    );
};

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const QuizListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const QuizDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
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

export default QuizList;