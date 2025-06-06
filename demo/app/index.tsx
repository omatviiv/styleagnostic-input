import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {GlobalStyle} from 'demo/theme-service';
import MainMenu, {MenuItem} from 'demo/theme-service/main-menu';

import PublicDemo from '../';
import {
  Container,
} from './style';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicDemo/>,
  },
]);

const Application: React.FC = () => <Container>
  <React.StrictMode>
    <MainMenu version='1.0.1'>
      <MenuItem>Home</MenuItem>
      <MenuItem>Elswhere</MenuItem>
      <MenuItem>Elswhere</MenuItem>
      <MenuItem>Elswhere</MenuItem>
      <MenuItem>Elswhere</MenuItem>
      <MenuItem>Elswhere</MenuItem>
    </MainMenu>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>
</Container>;

export default Application;
