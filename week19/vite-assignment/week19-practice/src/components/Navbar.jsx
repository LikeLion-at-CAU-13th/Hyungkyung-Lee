import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/likealion_logo_by_hanggang.png';


const Navbar = () => {
    return (
        <Nav>
            <Home to="/">
              <LogoImg src={logo} alt="로고"></LogoImg>
              <div>Hanggang</div>
            </Home>
            <Menu>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/portfolio_sw">Portfolio</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </Menu>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: rgb(175, 202, 191);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    height: 72px;
    color: white;
    padding: 25px;
    font-family: 'PretendardVariable';
    font-size: 25px;
    font-weight: bold;
`;

const LogoImg = styled.img`
  height: 80%;
  object-fit: contain;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: white;

  &:hover {
    opacity: 90%;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 32px;
`;

const NavItem = styled.div`
  font-size: 20px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export default Navbar;