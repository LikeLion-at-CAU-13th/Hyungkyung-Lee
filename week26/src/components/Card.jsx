import styled from "styled-components";

const Card = styled.div`
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Card;
