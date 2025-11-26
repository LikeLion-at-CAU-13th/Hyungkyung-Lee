// src/components/Navigation.jsx
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";

const Nav = styled.nav`
  position: relative;
  z-index: 1;
  padding: 15px 0;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:hover,
  &:active {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
    color: #4cafc8;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <Link to="/">코드스터딧</Link>
        <Menu>
          <MenuItem>
            <StyledNavLink to="/">홈</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/my-feed">내 피드</StyledNavLink>
          </MenuItem>
        </Menu>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
