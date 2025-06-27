import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import { ModalProvider } from './context/ModalContext';


function App() {
  return (
    <ModalProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mypage' element={<MyPage/>} />
        </Routes>
      </Layout>
    </ModalProvider>
  );
}

export default App;