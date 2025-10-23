// src/components/Post.jsx
import styled from "styled-components";
import Card from "./Card";
import ContentInfo from "./ContentInfo";

function Post({ post }) {
  return (
    <PostCard>
      <Content>
        <ContentInfo user={post.user} updatedTime={post.updatedAt} />
        <Description>{post.content}</Description>
      </Content>
    </PostCard>
  );
}

export default Post;

const PostCard = styled(Card)`
  /* Post 컴포넌트에만 적용되는 추가 스타일이 있다면 여기에 작성 */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 134px;
  padding: 20px 20px 30px;
  background-color: #ffffff;
  border-top: solid 1px #ebebeb;
`;

const Description = styled.p`
  display: -webkit-box;
  margin: 0 0 10px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 300;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
