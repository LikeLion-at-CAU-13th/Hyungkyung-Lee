import React from "react";
import styled from "styled-components";

const ChatInput = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <InputWrapper>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력하세요."
      />
      <Button onClick={onSend}>전송</Button>
    </InputWrapper>
  );
};

export default ChatInput;

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid #ddd;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #4e54c8;
    box-shadow: 0 0 0 2px rgba(78, 84, 200, 0.2);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;