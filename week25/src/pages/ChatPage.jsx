// TO DO LIST
// 1. AI로부터 채팅 받아오는 동안 Loader 적용시키기
// 2. 

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Loader from "../components/Loader";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

const url = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=" + import.meta.env.VITE_GEMINI_API_KEY;

async function generateContent(prompt) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    }),
  });

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "응답 없음";
}

// list model을 활용해서 해당 api에서 지원되는 gemini 모델들을 확인 후 사용해야 함!! (없는 모델 쓰면 404 에러)
// async function listModels() {
//   const res = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${import.meta.env.VITE_GEMINI_API_KEY}`);
//   const data = await res.json();
//   console.log(data); // check model names like gemini-1.5-pro-002, gemini-1.5-flash-002, etc.
// }

const ChatPage = () => {
  //채팅내역을 담는 배열
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  // const model = genAI.getGenerativeModel({ model : "gemini-1.5-pro" });

  
  const handleSend = async () => {
    if (!input.trim()) return; // 빈 메시지 방지용

    // 사용자가 텍스트 입력 및 메시지 보내기
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // AI로부터 응답 받아서 메시지 띄우기
    try {
      const result = await generateContent(input);
      // const listmodel = await listModels();
      // console.log(listmodel);
      console.log(result);
      // const result = await model.generateContent(input);
      const text = result ?? "응답이 없습니다.";
      const aiMsg = { role: "assistant", content: text };
      setMessages((prev) => [...prev, aiMsg]);
    } catch(err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "오류가 발생했습니다." },
      ]);
    } finally {
      setLoading(false);
    }
  } 
  
  return (
    <PageWrapper>
      <ChatCard
        initial = {{ opacity: 0, y: 40 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ opacity: 0, y: 40 }}
      >
        <Header />
        <Messages>
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} />
          ))}
        </Messages>
        <ChatInput value={input} onChange={setInput} onSend={handleSend} />
      </ChatCard>
    </PageWrapper>
  )
}

export default ChatPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;           
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ChatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: min(92vw, 720px); 
  height: min(80vh, 820px);

  margin: 0 auto;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Messages = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #fafafa;
  overscroll-behavior: contain;
`;