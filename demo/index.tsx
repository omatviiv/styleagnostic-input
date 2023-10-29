import React from 'react';

// THIS IS PUBLICK DEMO
// DON'T IMPORT ANYTHING from demo except demo/style.ts or component from ../
// DON'T USE IMPORT ALIASES
import Input from '../';
import { InputContainer } from './style';

const PublicDemo: React.FC = () => <>
  <h1>Input component</h1>
  Input text here: <InputContainer><Input/></InputContainer>
</>;

export default PublicDemo;
