import React from 'react';

// THIS IS PUBLIC DEMO
// DON'T IMPORT ANYTHING from demo except demo/style.ts or component from ../
// DON'T USE IMPORT ALIASES
import Input from '../';
import { InputContainer } from './style';

const PublicDemo: React.FC = () => <>
  <h1>Input component</h1>
  Input text here: <InputContainer><Input/></InputContainer>
  <h2>Temporary placed here for testing</h2>
  <InputContainer><Input type="email" placeholder="Email"/></InputContainer>
  <InputContainer><Input type="number" placeholder="Number"/></InputContainer>
  <InputContainer>
    <Input type="password" placeholder="Password"/>
  </InputContainer>
  <InputContainer><Input type="search" placeholder="Search"/></InputContainer>
  <InputContainer><Input type="tel" placeholder="Telephone"/></InputContainer>
  <InputContainer><Input type="url" placeholder="URL"/></InputContainer>

</>;

export default PublicDemo;
