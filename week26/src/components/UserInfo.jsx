// src/components/UserInfo.jsx
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";

function UserInfo({ name, photo }) {
  return (
    <UserInfoContainer>
      <ProfilePhoto photo={photo} name={name} />
      <UserName>{name}</UserName>
    </UserInfoContainer>
  );
}

export default UserInfo;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: #494949;
`;
