import React from 'react';

// THIS IS PUBLIC DEMO
// DON'T IMPORT ANYTHING from demo except:
//   - demo/style.ts
//   or
//   - component from ../
// DON'T USE IMPORT ALIASES
import Input from '../';
import { InputContainer } from './style';

const PublicDemo: React.FC = () => <>
  <h1>Input component (default)</h1>
  Input here:
  <InputContainer><Input/></InputContainer>

  <h1>email</h1>
  Input here:
  <InputContainer><Input type="email" placeholder="Email"/></InputContainer>

  <h1>number</h1>
  Input here:
  <InputContainer><Input type="number" placeholder="Number"/></InputContainer>

  <h1>password</h1>
  Input here:
  <InputContainer>
    <Input type="password" placeholder="Password"/>
  </InputContainer>

  <h1>search</h1>
  Input here:
  <InputContainer><Input type="search" placeholder="Search"/></InputContainer>

  <h1>phone number</h1>
  Input here:
  <InputContainer>
    <Input type="tel" placeholder="+38076 123 23 45"/>
  </InputContainer>

  <h1>URL</h1>
  Input here:
  <InputContainer><Input type="url" placeholder="URL"/></InputContainer>
</>;

export default PublicDemo;
