import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ChatMessage = ({ role, content }) => {
  return (
    <Bubble
      role={role}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </Bubble>
  );
};

export default ChatMessage;

const Bubble = styled(motion.div)`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${({ role }) => (role === "user" ? "#fff" : "#222")};
  background: ${({ role }) =>
    role === "user"
      ? "linear-gradient(135deg, #4e54c8, #8f94fb)"
      : "#f0f0f0"};
  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;