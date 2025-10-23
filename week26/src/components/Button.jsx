import styled from "styled-components";

const Button = styled.button`
  flex: none;
  padding: 8px 10px;
  color: #fff;
  cursor: pointer;
  background-color: #4cafc8;
  border: none;
  border-radius: 30px;
  outline: none;
  height: 40px;
  margin: auto;
  font-size: 12px;

  &:disabled {
    background-color: rgb(193, 193, 193);
    color: grey;
    cursor: not-allowed; /* 비활성화 시 커서 모양 변경 추가 */
  }
`;

export default Button;
