import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

import logo from './../images/MimicsAndXorn-Simple.png';

const StyledNavbar = styled(Navbar)`
  height: 90px;
`;

export default () => (
  <StyledNavbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="Mimics & Xorn" />
    </Navbar.Brand>
  </StyledNavbar>
);