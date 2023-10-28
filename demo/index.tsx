import React from 'react';

import Input from '../';
import {
  Header, InputContainer,
} from './style';

// move all of the components used here into theme-service
// which in turn will be moved to theme-service repository
const DefaultInputDemo: React.FC = () => <>
  <Header>Input component</Header>
  Input text here: <InputContainer><Input/></InputContainer>
</>;

export default DefaultInputDemo;
