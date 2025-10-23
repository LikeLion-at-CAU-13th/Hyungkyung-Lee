import React from "react";
import styled from "styled-components";
import Loading from "../components/Loading";

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Loading title="로딩 중입니다..." description="조금만 기다려주세요." />
    </LoadingContainer>
  );
};

export default LoadingPage;

const LoadingContainer = styled.div`
  margin: 80px auto;
`;
