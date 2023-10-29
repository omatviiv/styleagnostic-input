import React from 'react';

import PublicDemo from '../';
import {
  GlobalStyle, Container,
} from './style';

const Application: React.FC = () => <Container>
  {/* TODO: include nav menu here so that PublicDemo can be reused from
            demo/index.tsx which is also a default public demo page
            imported in the styleagnostic consolidated demo project
  */}
  <GlobalStyle/>
  <PublicDemo/>
</Container>;

export default Application;
