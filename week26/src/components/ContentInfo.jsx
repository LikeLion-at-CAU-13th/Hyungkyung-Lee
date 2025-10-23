// src/components/ContentInfo.jsx
import styled from "styled-components";
import UserInfo from "./UserInfo";

function ContentInfo({ user, updatedTime }) {
  return (
    <InfoContainer>
      <UserInfo name={user.name} photo={user.photo} />
      <DateLabel>{formateDate(updatedTime)}</DateLabel>
    </InfoContainer>
  );
}

export default ContentInfo;

// 날짜 포맷 함수는 그대로 유지
function formateDate(timestamp) {
  const fullDate = new Date(timestamp);
  const date = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${year}-${month}-${date} ${hours}:${minutes}`;
}

const InfoContainer = styled.div`
  display: flex;
`;

const DateLabel = styled.div`
  margin-left: auto;
  font-size: 12px;
  font-weight: 300;
  color: grey;
`;
