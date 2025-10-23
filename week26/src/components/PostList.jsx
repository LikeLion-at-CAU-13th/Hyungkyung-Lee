// src/components/PostList.jsx
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, getPostsByUsername, uploadPost } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import PostForm from "./PostForm";
import { useState } from "react";

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  // TODO: 1. `variant` prop에 따라 postsQueryKey와 postsQueryFn을 동적으로 설정하세요.
  // HINT: if/else 문을 사용해서 HOME_FEED와 MY_FEED를 분기 처리할 수 있습니다.
  let postsQueryKey;
  let postsQueryFn;

  if (variant === FEED_VARIANT.HOME_FEED) {
    postsQueryKey = ["posts", {"variant": "HomeFeed"}];
    postsQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    postsQueryKey = ["posts", {"variant": "MyFeed"}];
    postsQueryFn = () => getPostsByUsername("codeit");
  }

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  // TODO: 2. useMutation을 완성하세요.
  // `mutationFn`에는 `uploadPost` 함수를 사용하고,
  // ** `onSuccess` 콜백에서 queryClient를 사용해 "자동 새로고침" 기능을 구현하세요.
  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setContent("");
    }
  });

  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost, {
      onSuccess: () => {
        toast("포스트가 성공적으로 업로드 되었습니다!");
      },
    });
  };

  // TODO: 3. isPending과 isError 상태에 따라 적절한 컴포넌트를 리턴하세요.
  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {showPostForm ? (
        <PostForm
          onSubmit={handleUploadPost}
          // TODO: 4. 포스트 업로드 중에 버튼을 비활성화하세요.
          buttonDisabled={uploadPostMutation.isPending || uploadPostMutation.isLoading}
        />
      ) : (
        ""
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;