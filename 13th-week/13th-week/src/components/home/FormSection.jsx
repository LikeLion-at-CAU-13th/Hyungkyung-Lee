import React, { useContext, useState } from 'react';
import Form from './Form';
import { Button } from '../layout/common';
import { ThemeColorContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { emailAtom, isSubmittedAtom, partAtom, userNameAtom } from '../../recoil/atom';
import styled from 'styled-components';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setItSubmitted = useSetRecoilState(isSubmittedAtom);
    const [modalOpen, setModalOpen] = useState(false);

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const part = useRecoilValue(partAtom);

    const confirmBtn = () => {
      setItSubmitted(true);
      setModalOpen(false);
      alert(`Welcome ${userName}!`);
      navigate('/mypage');
    }

    const cancelBtn = () => {
      setModalOpen(false);
    }

  return (
    <Main>
      {modalOpen && (
        <ModalOverlay onClick={() => setModalOpen(false)}>
          <ModalContent onClick = {e => e.stopPropagation()}>
            <ModalTitle mode={mode.main}>
              아래 정보를 다시 확인해주세요<br/>
              --------------------------------
            </ModalTitle>
            <Main>
              <Sub>
                <h3>이름: </h3>
                <h3>이메일: </h3>
                <h3>파트: </h3>
              </Sub>
              <Sub>
                <h3> {userName} </h3>
                <h3> {email} </h3>
                <h3> {part} </h3>
              </Sub>
            </Main>
            <ButtonRow>
              <Button mode={mode.button} onClick={cancelBtn}> 취소 </Button>
              <Button mode={mode.button} onClick={confirmBtn}> 확인 </Button>
            </ButtonRow>
          </ModalContent>
        </ModalOverlay>
      )}
      <Sub>
        <Form type='home' inputType='이름'/>
        <Form type='email' inputType='이메일'/>
        <Form type='part' inputType='파트'/>
      </Sub>
      <Sub>
        <Button mode={mode.button} onClick={() => setModalOpen(true)}>
          제출
        </Button>
      </Sub>
    </Main>
  )
}

const Main = styled.div `
  display: flex;
  align-itmes: center;
  justify-content: center;
`;

const Sub = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 30px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  width: 500px;
  max-width: 100vw;
  position: relative;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  padding: 15px;
`;

const ModalTitle = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.mode};
  align-items: center;
  justify-content: center;
  margin: 25px 0 0 0;
`;

const ButtonRow = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: 0 0 25px 0;
`;

export default FormSection;