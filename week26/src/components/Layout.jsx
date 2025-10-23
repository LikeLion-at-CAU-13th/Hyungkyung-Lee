import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

// Navigation 컴포넌트에 스타일 적용
const StyledNav = styled(Navigation)`
  flex: none; /* .nav 스타일 */
`;

// 본문 영역 스타일
const Main = styled.main`
  position: relative;
  flex-grow: 1; /* .body 스타일 */
`;

function Layout() {
  return (
    <>
      <StyledNav />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
