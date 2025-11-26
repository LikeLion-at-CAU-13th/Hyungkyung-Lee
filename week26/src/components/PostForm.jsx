// src/components/PostForm.jsx
import styled from "styled-components";
import TextInputForm from "./TextInputForm";
import "react-toastify/dist/ReactToastify.css";

const FormContainer = styled.div`
  width: 100%;
`;

function PostForm({ onSubmit, buttonDisabled }) {
  const currentUserInfo = {
    username: "codeit",
    name: "코드잇",
    photo:
      "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/codestudit/001.png",
  };

  const handleSubmit = async (content) => {
    const newPost = {
      username: currentUserInfo.username,
      content: content,
    };

    onSubmit(newPost);
  };

  return (
    <FormContainer>
      <TextInputForm
        onSubmit={handleSubmit}
        currentUserInfo={currentUserInfo}
        placeholder="오늘의 공부 기록을 남겨보세요."
        buttonText="업로드"
        buttonDisabled={buttonDisabled}
      />
    </FormContainer>
  );
}

export default PostForm;
