import React from 'react';
import DefaultDemo from '../';
import {
  GlobalStyle, Container,
} from './style';

const Application: React.FC = () => <Container>
  <GlobalStyle/>
  <DefaultDemo/>
</Container>;

export default Application;
