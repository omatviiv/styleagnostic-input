import React from 'react';
import Input from '../../';
import {
  GlobalStyle, Header, Container, InputContainer,
} from './style';

const Application: React.FC = () => <Container>
  <GlobalStyle/>
  <Header>Input component demo</Header>
  Input text here: <InputContainer><Input/></InputContainer>
</Container>;

export default Application;
