import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
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

const buildNavbar = (activePage, navbarData, prefix = '', topLevel = true) => {
  const navbarLinks = []

  if(Array.isArray(navbarData)) {
    navbarData.forEach(inner => {
      if(Array.isArray(inner.data)) {
        navbarLinks.push(
          <NavDropdown
            title={inner.name}
            key={inner.key}
            id="basic-nav-dropdown" >
            {buildNavbar(activePage, inner.data, `${prefix}/${inner.name.replace(/\s+/g, '-').toLowerCase()}`, false)}
          </NavDropdown>);
      } else {
        navbarLinks.push(buildNavbar(activePage, inner, prefix, topLevel));
      }
    });
  } else {
      if(topLevel) {
        navbarLinks.push(
          <Nav.Link
            as={NavLink}
            key={navbarData.key}
            to={`${prefix}/${navbarData.name.replace(/\s+/g, '-').toLowerCase()}`}>
            {navbarData.name}
          </Nav.Link>
        );
      } else {
        navbarLinks.push(
          <NavDropdown.Item
            as={NavLink}
            key={navbarData.key}
            to={`${prefix}/${navbarData.name.replace(/\s+/g, '-').toLowerCase()}`}>
            {navbarData.name}
          </NavDropdown.Item>
        );
      }
  }

  return navbarLinks;
}

const MxNavbar =  () => {
  const { activePage } = useContext(NavigationContext);

  return (
    <StyledNavbar bg="light" expand="lg">
      <Navbar.Brand href="/MimicsAndXorn/home">
        <StyledImg
          src={logo}
          className="d-inline-block align-top"
          alt="Mimics & Xorn" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {buildNavbar(activePage, navigationMenus, 'MimicsAndXorn')}
      </Nav>
    </StyledNavbar>
)};

export default MxNavbar;
