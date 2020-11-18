import React, { useContext } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavigationContext, navigationMenus } from './NavigationProvider';

import logo from './../images/MimicsAndXorn-Simple.png';

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


const buildNavbar = (activePage, setActivePage, navbarData, topLevel = true) => {
  const navbarLinks = []

  if(Array.isArray(navbarData)) {
    navbarData.forEach(inner => {
      if(Array.isArray(inner.data)) {
        navbarLinks.push(
          <NavDropdown
            title={inner.name}
            key={inner.key}
            id="basic-nav-dropdown" >
            {buildNavbar(activePage, setActivePage, inner.data, false)}
          </NavDropdown>);
      } else {
        navbarLinks.push(buildNavbar(activePage, setActivePage, inner, topLevel));
      }
    });
  } else {
      if(topLevel) {
        navbarLinks.push(
          <Nav.Link key={navbarData.key} active={activePage.key === navbarData.key} onClick={() => setActivePage(navbarData)}>
            {navbarData.name}
          </Nav.Link>
        );
      } else {
        navbarLinks.push(
          <NavDropdown.Item key={navbarData.key} active={activePage.key === navbarData.key} onClick={() => setActivePage(navbarData)}>
            {navbarData.name}
          </NavDropdown.Item>
        );
      }
  }

  return navbarLinks;
}

const MxNavbar =  () => {
  const { activePage, setActivePage } = useContext(NavigationContext);

  return (
    <StyledNavbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <StyledImg
          src={logo}
          className="d-inline-block align-top"
          alt="Mimics & Xorn" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {buildNavbar(activePage, setActivePage, navigationMenus)}
      </Nav>
    </StyledNavbar>
)};

export default MxNavbar;
