import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const HeaderBlock = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const HeaderLogo = styled.img`
  height: 80px;
`;

const Header = () => (
  <HeaderBlock>
    <HeaderLogo src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React Styled Man</h2>
  </HeaderBlock>
);

export default Header;
