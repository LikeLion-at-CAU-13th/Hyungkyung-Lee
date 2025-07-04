import React from 'react';
import { useSetRecoilState } from 'recoil';
import { emailAtom, partAtom, userNameAtom } from '../../recoil/atom';

const Form = ({type, inputType}) => {
    const setUserNmae = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    // const setPart = useSetRecoilState(partAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === '이름') {
            setUserNmae(value);
        } else if (inputType === '이메일') {
            setEmail(value);
        } 
        // else if (inputType === '파트') {
        //     setPart(value);
        // }
    }

  return (
    <>
        <div>{inputType}</div>
        <input type={type} onChange={onChange}/>
        <br/>
    </>
  )
}

export default Form