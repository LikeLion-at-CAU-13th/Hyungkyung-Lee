import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    console.log('GET 응답: ', data);
    setUsers(data.data);
  }

  const handleAddUser = async() => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({}),
    })
    const data = await res.json();
    console.log('POST 응답: ', data);
    fetchUsers();
  }

  const handleDeleteUser = async(id) => {
    await fetch(`/api/users?id=${id}`, {method: 'DELETE'});
    fetchUsers();
  }

  useEffect(()=> {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <UserListBox>
        <Title> 🦁 Likelion UserList 🦁 </Title>
        <Button onClick={handleAddUser}> 유저 등록 </Button>
        <UserListUl>
          {users.map((u)=> (
            <UserItem key = {u.id}>
              {u.name}
              <DeleteButton onClick={() => handleDeleteUser(u.id)}> 삭제 </DeleteButton>
            </UserItem>
          ))}
        </UserListUl>
      </UserListBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
`;

const UserListBox = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #45a049;
  }
`;

const UserListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserItem = styled.li`
  background-color: #f1f1f1;
  margin: 0.4rem auto;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  max-width: 400px;
  color: #444;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const DeleteButton = styled.button`
  margin-left: 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #d32f2f;
  }
`;

export default UserList