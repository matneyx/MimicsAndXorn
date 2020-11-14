import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

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

// const menus = {
//   name: 'Rules',
//   data: [
//     {
//       name: 'Combat',
//       data: [
//         {
//           name: 'Golarion Action Economy',
//           data: '../rules/combat/GolarionActionEconomy'
//         }
//       ]
//     }
//   ]
// };

const MxNavbar =  () => (
  <StyledNavbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <StyledImg
        src={logo}
        className="d-inline-block align-top"
        alt="Mimics & Xorn" />
    </Navbar.Brand>
  </StyledNavbar>
);

export default MxNavbar;
