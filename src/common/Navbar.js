import React, { useContext } from 'react';
import { setLinkProps } from 'hookrouter';
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

const NavLink = (props) => <Nav.Link {...setLinkProps(props)}>{props.children}</Nav.Link>;
const NavDropdownItem = (props) => <NavDropdown.Item {...setLinkProps(props)}>{props.children}</NavDropdown.Item>;


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
          <NavLink
            key={navbarData.key}
            active={activePage.key === navbarData.key}
            href={`${prefix}/${navbarData.name.replace(/\s+/g, '-').toLowerCase()}`}>
            {navbarData.name}
          </NavLink>
        );
      } else {
        navbarLinks.push(
          <NavDropdownItem
            key={navbarData.key}
            active={activePage.key === navbarData.key}
            href={`${prefix}/${navbarData.name.replace(/\s+/g, '-').toLowerCase()}`}>
            {navbarData.name}
          </NavDropdownItem>
        );
      }
  }

  return navbarLinks;
}

const MxNavbar =  () => {
  const { activePage } = useContext(NavigationContext);

  return (
    <StyledNavbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <StyledImg
          src={logo}
          className="d-inline-block align-top"
          alt="Mimics & Xorn" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {buildNavbar(activePage, navigationMenus)}
      </Nav>
    </StyledNavbar>
)};

export default MxNavbar;
