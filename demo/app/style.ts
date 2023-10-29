import styled, {createGlobalStyle} from 'styled-components';

import {bodyCss} from 'demo/theme-service';

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyCss}
  }
`;

export const Container = styled.div`
  padding: 1rem;
`;
