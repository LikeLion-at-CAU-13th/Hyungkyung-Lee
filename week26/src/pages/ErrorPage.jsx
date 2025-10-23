import React from "react";
import styled from "styled-components";
import Warn from "../components/Warn";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Warn
        title="에러가 발생했습니다."
        description="잠시 후에 다시 시도해주세요."
      />
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  margin: 80px auto;
`;
