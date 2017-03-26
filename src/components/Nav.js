import React from 'react';
import styled from 'styled-components';

const NavBlock = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  padding: 20px;
  color: #fff;
  text-decoration: none;
`;

const Nav = () => (
  <NavBlock>
    <NavItem href="#">About</NavItem>
    <NavItem href="#">Games</NavItem>
    <NavItem href="#">Download</NavItem>
  </NavBlock>
);

export default Nav;
