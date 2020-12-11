import React from 'react';
import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './common/Navbar';
import NavigationProvider, { navigationRoutes } from './common/NavigationProvider';

const MainBody = styled.div`
  background-color: #EEE5CE;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50px;
  overflow: scroll;
`;

const App = () =>
{
    const routes = useRoutes(navigationRoutes, '/MimicsAndXorn');

    return (
        <NavigationProvider>
          <Navbar />
          <MainBody>
            {routes}
          </MainBody>
        </NavigationProvider>
    );
}

export default App;
