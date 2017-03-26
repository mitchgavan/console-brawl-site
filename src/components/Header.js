import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import logo from '../logo.svg';

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 20px;
  color: white;
`;

const HeaderLogo = styled.img`
  height: 80px;
`;

const Header = () => (
  <HeaderBlock>
    <HeaderLogo src={logo} alt="logo" />
    <Nav />
  </HeaderBlock>
);

export default Header;
