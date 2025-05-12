import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio_sw from './pages/Portfolio_sw';
import Portfolio_de from './pages/Portfolio_de';
import Portfolio_pic from './pages/Portfolio_pic';
import Portfolio_cook from './pages/Portfolio_cook';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio_sw' element={<Portfolio_sw />} />
        <Route path='/portfolio_de' element={<Portfolio_de />} />
        <Route path='/portfolio_pic' element={<Portfolio_pic />} />
        <Route path='/portfolio_cook' element={<Portfolio_cook />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// import React from 'react';
// import styled from 'styled-components';

// const App = () => {
//   const major1 = "영어교육과 20학번";
//   const major2 = "소프트웨어학부 복수전공";
//   const club1 = "멋쟁이 사자처럼 13기";
//   const part = "프론트엔드";
//   const club2 = "Dance P.O.zz 하우스 & 락킹";
//   const msg = "이번 학기 막학기 졸업은 몰?루 👀"  
  
//   //const [modal, setModal] = useState(false);
  
//   return (
//     <Container className="header">
//       <img src="Hyungkyung-Lee/react-practice/src/assets/likealion_logo_by_hanggang.png"></img>
//       <div>Hanggang</div>
//       <div className="header menu">
//         <div>Home</div>
//         <div>About</div>
//         <div>Portfolio</div>
//         <div>Contact</div>
//       </div>
//     </Container>
//   );
// };

// const Container = styled.div` 
//   background-color: rgb(175, 202, 191);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   height: 72px;
//   color: white;
// `;

// export default App;