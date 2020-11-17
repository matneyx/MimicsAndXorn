import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from './../images/MimicsAndXorn-Simple.png';

/* eslint-disable import/no-webpack-loader-syntax */
import GAE from '!!raw-loader!../data/rules/combat/GolarionActionEconomy.md';
import intro from '!!raw-loader!../data/Intro.md';
/* eslint-enable */

const StyledNavbar = styled(Navbar)`
  height: 50px;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%
`;

const StyledImg = styled.img`
  max-height: 50%;
  max-width: 50%;
`;

const menus = [
  {
    name: 'Home',
    key:'home-link',
    data: intro,
  },
  {
  name: 'Rules',
  key: 'rules-dropdown',
  data: [
    {
      name: 'Combat',
      key: 'combat-dropdown',
      data: [
        {
          name: 'Golarion Action Economy',
          key: 'gae-link',
          data: GAE
        }
      ]
    }
  ]
}];

const buildNavbar = (navbarData, topLevel = true) => {
  const navbarLinks = []

  if(Array.isArray(navbarData)) {
    navbarData.forEach(inner => {
      if(Array.isArray(inner.data)) {
        navbarLinks.push(
          <NavDropdown
            title={inner.name}
            key={inner.key}
            id="basic-nav-dropdown" >
            {buildNavbar(inner.data, false)}
          </NavDropdown>);
      } else {
        navbarLinks.push(buildNavbar(inner, topLevel));
      }
    });
  } else {
    if(topLevel) {
      navbarLinks.push(
        <Nav.Link key={navbarData.key} onClick={() => console.log(navbarData.data)}>
          {navbarData.name}
        </Nav.Link>
      );
    } else {
      navbarLinks.push(
        <NavDropdown.Item key={navbarData.key} onClick={() => console.log(navbarData.data)}>
          {navbarData.name}
        </NavDropdown.Item>
      );
    }
  }

  return navbarLinks;
}

const MxNavbar =  () => (
  <StyledNavbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <StyledImg
        src={logo}
        className="d-inline-block align-top"
        alt="Mimics & Xorn" />
    </Navbar.Brand>
    <Nav className="mr-auto">
      {buildNavbar(menus)}
    </Nav>
  </StyledNavbar>
);

export default MxNavbar;
