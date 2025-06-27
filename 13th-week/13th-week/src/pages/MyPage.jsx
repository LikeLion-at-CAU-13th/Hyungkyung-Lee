import React, { useContext } from 'react';
import { Button, Title, Wrapper } from '../components/layout/common';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { ThemeColorContext } from '../context/context';
import { emailAtom, isSubmittedAtom, partAtom, userNameAtom } from '../recoil/atom';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const mode = useContext(ThemeColorContext);
    const userName = useRecoilValue(userNameAtom);

    const navigate = useNavigate();
    const resetUserName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetIsSubmitted = useResetRecoilState(isSubmittedAtom);
    const resetPart = useResetRecoilState(partAtom);

    const handleReset = () => {
        resetUserName();
        resetEmail();
        resetIsSubmitted();
        resetPart();
        navigate('/');
    }

  return (
    <Wrapper>
        <Title> Welcome {userName}! </Title>
        <Button mode={mode.button} onClick={handleReset}>
            Reset
        </Button>
    </Wrapper>
  )
}

export default MyPage