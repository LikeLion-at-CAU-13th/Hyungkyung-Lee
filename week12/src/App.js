import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components'
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import QuizList from './pages/QuizList';
import QuizDetail from './pages/QuizDetail';
import QuizResult from './pages/QuizResult';

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} >
          <Route path=":id" element={<BookDetail />} />
        </Route>
        <Route path="/quizzes" element={<QuizList />} >
          <Route path=":id" element={<QuizDetail />} />
        </Route>
        <Route path="/quiz-result" element={<QuizResult />} />
      </Routes>
    </AppDom>
  );
}

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default App;
