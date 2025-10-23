import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Bubble>
      <Dot delay="0s">•</Dot>
      <Dot delay="0.2s">•</Dot>
      <Dot delay="0.4s">•</Dot>
    </Bubble>
  );
};

export default Loader;

const blink = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const Dot = styled.span`
  font-size: 1.5rem;
  margin: 0 2px;
  animation: ${blink} 1.4s infinite both;
  animation-delay: ${({ delay }) => delay};
`;

const Bubble = styled.div`
  align-self: flex-start;
  background: #f0f0f0;
  color: #333;
  padding: 10px 14px;
  border-radius: 16px;
  margin: 8px 0;
  display: flex;
`;