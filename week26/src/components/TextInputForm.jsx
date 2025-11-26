// src/components/TextInputForm.jsx
import { useState } from "react";
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";
import Button from "./Button"; // 위에서 만든 Button 컴포넌트를 import

function TextInputForm({
  onSubmit,
  currentUserInfo,
  placeholder,
  buttonText,
  buttonDisabled,
}) {
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileWrapper>
        <ProfilePhoto
          photo={currentUserInfo?.photo}
          name={currentUserInfo?.name}
        />
      </ProfileWrapper>
      <TextArea
        name="content"
        placeholder={placeholder}
        value={content}
        onChange={handleInputChange}
      />
      <Button disabled={buttonDisabled || !content} type="submit">
        {buttonText}
      </Button>
    </Form>
  );
}

export default TextInputForm;

const Form = styled.form`
  display: flex;
  height: 50px;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  margin: auto;
`;

const TextArea = styled.textarea`
  flex: 1 1;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  outline: none;
  margin: 0 10px;
  border: 1px solid #ebebeb;
  resize: none; /* textarea 크기 조절 비활성화 */

  &::placeholder {
    color: #878787;
  }
`;
