import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getMyPage(localStorage.getItem("access"))
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            alert("토큰 기한 만료");
        })
    }, []);

    useEffect(() => {
      if (!localStorage.getItem("refresh")) {
        alert("토큰이 만료되어 로그인 페이지로 이동합니다.");
        navigate('/');
      }
    }, []);
  
    if (loading) return <div>로딩 중...</div>;

    const logout = async() => {
      try{
        localStorage.removeItem('access');
        navigate('/');
      } catch (error) {
        alert("정상적으로 로그아웃이 되지 않았습니다.")
      }
    }

  return (
    <>
        <Wrapper>
            <Title>마이페이지</Title>
            <div>이름: {data.name}</div>
            <div>나이: {data.age}</div>
            <Button onClick={() => logout()}>로그아웃</Button>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Button = styled.button `
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
`;


export default MyPage