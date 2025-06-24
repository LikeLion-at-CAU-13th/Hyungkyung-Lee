import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export const pickedAnswer = [];

const QuizDetail = () => {
    // const [pickedAnswer, setAnswers] = useState([]);
    const navigate = useNavigate();

    const params = useParams();
    const id = params.id;
    const [Quizzes, setQuizzes] = useState([]);
    
    const [selected, setSelected] = useState();

    useEffect( () => {
        const fetchQuizzes = async () => {
            const response = await axios.get(`https://week12-api-1cc7.onrender.com/api/questions`);
            setQuizzes(response.data);
        };
        fetchQuizzes();
    }, []);

    const Quiz = Quizzes.find((q) => q.id === parseInt(id))

    const navigatePrevious = (id) => {
        if (id === 0) {
            alert ("첫번째 질문입니다.");
        } else 
            navigate(`/quizzes/${id-1}`);
    };

    const navigateNext = (id, answer) => {
        pickedAnswer[id] = answer;
        console.log(pickedAnswer);
        if (id === 4) {
            alert ("마지막 질문입니다.");
        } else {
            navigate(`/quizzes/${id+1}`);
        }
    };

    if (!Quiz) {
        return <div>질문이 존재하지 않습니다.</div>
    }

    return (
        <div>
            <h1>Q{Quiz.id+1}. {Quiz.question}</h1>
            <OptionList>
                {Quiz.answers.map((opt, idx) => (
                    <Option key={idx} onClick={() => setSelected(idx)}>
                        <RadioCircle selected={selected === idx}>
                            {selected === idx && <RadioDot />}
                        </RadioCircle>
                        <OptionText selected = {selected === idx}> {opt} </OptionText>
                    </Option>
                ))}
            </OptionList>
            <ButtonRow>
                <Button onClick={() => navigatePrevious(Quiz.id)}>
                    Previous
                </Button>
                <Button onClick={() => navigateNext(Quiz.id, selected)}>
                    Next
                </Button>
            </ButtonRow>
        </div>
    );
};

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

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;

const OptionList = styled.div `
    display: flex;
    flex-direction: column;
    padding: 25px 55px;
    gap: 18px;
`;

const Option = styled.div `
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const RadioCircle = styled.div `
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const RadioDot = styled.div `
    background-color: #3d9dfd;
    border-radius: 50%;
    width: 10px;
    height: 10px;
`;

const ButtonRow = styled.div `
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

const OptionText = styled.div `

`;

export default QuizDetail;