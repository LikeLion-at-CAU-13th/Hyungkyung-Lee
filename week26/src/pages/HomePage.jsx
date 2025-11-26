import styled from "styled-components";
import Container from "../components/Container";
import PostList from "../components/PostList";
import { FEED_VARIANT } from "../values";

function HomePage() {
  return (
    <StyledContainer>
      <PostList variant={FEED_VARIANT.HOME_FEED} />
    </StyledContainer>
  );
}

export default HomePage;

const StyledContainer = styled(Container)`
  margin-bottom: 100px;
`;
