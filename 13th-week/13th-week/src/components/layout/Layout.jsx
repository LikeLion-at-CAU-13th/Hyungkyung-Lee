import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeColorContext } from '../../context/context';
import { useInRouterContext } from 'react-router-dom';
import { Button } from './common';
import { useRecoilValue } from 'recoil';
import { emailAtom, isSubmittedAtom, partAtom, userNameAtom } from '../../recoil/atom';

const Layout = ({children}) => {
    const context = useContext(ThemeColorContext);
    const [mode, setMode] = useState(context.blueTheme);

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmitted = useRecoilValue(isSubmittedAtom);
    const part = useRecoilValue(partAtom);

    const handleMode = (e) => {
      const value = e.target.value;

      if (value === 'blue') {
        setMode(context.blueTheme)
      } else if (value === 'green') {
        setMode(context.greenTheme)
      } else if (value === 'pink') {
        setMode(context.pinkTheme)
      }
    }

  return (
    <ThemeColorContext.Provider value={mode}>
      <Wrapper>
          <Header mode={mode.main}>
            <Explain>Color mode: </Explain>
            <Button value='blue' onClick={handleMode}> 💙 </Button>
            <Button value='green' onClick={handleMode}> 💚 </Button>
            <Button value='pink' onClick={handleMode}> 🩷 </Button>
          </Header>
          <div>{children}</div>
          <Footer mode={mode.main}>
            {isSubmitted ? `${part} ${userName}의 공간 | ${email}` : '2025 LIKELION FE'}
          </Footer>
      </Wrapper>
    </ThemeColorContext.Provider>
  )
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Explain = styled.div `
  font-size: 15px;
  margin: 0 25px 0 0;
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;


export default Layout;