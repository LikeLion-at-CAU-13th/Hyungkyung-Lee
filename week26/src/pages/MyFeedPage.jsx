import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import PostList from "../components/PostList";
import Container from "../components/Container";
import { FEED_VARIANT } from "../values";

function MyFeedPage() {
  return (
    <StyledContainer>
      <ToastContainer position="top-center" autoClose={2000} />
      <PostList variant={FEED_VARIANT.MY_FEED} showPostForm={true} />
    </StyledContainer>
  );
}

export default MyFeedPage;

const StyledContainer = styled(Container)`
  margin-bottom: 100px;
`;
