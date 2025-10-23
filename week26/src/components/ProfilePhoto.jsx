import styled from "styled-components";

const StyledPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

function ProfilePhoto({ photo, name }) {
  return <StyledPhoto src={photo} alt={name} />;
}

export default ProfilePhoto;
