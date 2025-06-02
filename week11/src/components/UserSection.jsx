import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';

const UserSection = ({userData, curPage, setUserData, setCurPage}) => {
    const offset = 5; // 한 페이지 당 포함할 카드 개수: 5개
    const pagedData = userData.slice(curPage*offset, (curPage + 1)*offset); // 페이지 별로 들어가는 데이터

    return (
        <UserSecLayout>
            <UserCardBox>
                { pagedData.map((data, idx) => <UserCard key={idx} data={data} />) }
            </UserCardBox>
            {<PageSelection curPage={curPage} setCurPage={setCurPage} userData={userData} setUserData={setUserData} offset={offset}/>}
        </UserSecLayout>
    );
};

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

export default UserSection;