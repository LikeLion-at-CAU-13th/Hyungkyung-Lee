import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderBar>Gemini AI Chatbot</HeaderBar>;
};

export default Header;

const HeaderBar = styled.div`
  padding: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
