import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const HeaderLogo = styled.img`
  height: 80px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <HeaderLogo src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Styled Man</h2>
      </HeaderBlock>
    );
  }
}

export default Header;
