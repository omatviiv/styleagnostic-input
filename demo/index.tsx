import React from 'react';
import Input from '../';
import {
  Header, InputContainer,
} from './style';

const DefaultInputDemo: React.FC = () => <>
  <Header>Input component demo</Header>
  Input text here: <InputContainer><Input/></InputContainer>
</>;

export default DefaultInputDemo;
