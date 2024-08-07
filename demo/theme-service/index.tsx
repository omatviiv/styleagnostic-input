import {createGlobalStyle} from 'styled-components';

import {verywhite, blackb} from './color';

// RSPONSIVE APPROACH
// 1. Use rem units most of the times.
// 2. When transforming pixels from design to rems simply divide the pixel
// value by 10.
//
// Why and how:
// html font-size 62.5% which is 10px for the default font-size of 16px.
// So developer can make sure default font-size is 16px to be able to
// comfortably work with 1rem = 10px for ease of conversion px > rem.
// Of course having only 62.5% as base font-size is too small that is why
// in the closes children - body we immediatelly set font-size to 1.6rem
// This way we have same convenience of using pixel based designs and
// full responsiveness of the application.

// For this partucular theme where we use monospace font these breackpoints
// should not be used much because when having monospace font it would be
// very convenient to use ch CSS unit based breakpoints but still pixel
// based brackpoints might be useful as well.
export const media = {
  xs: '576px',
  sm: '768px',
    md: '992px',
  lg: '1200px',
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: Courier New;
    margin: 0;
    background: ${verywhite()};
    color: ${blackb()};
    font-size: 1.6rem;
    display: flex;
    flex-direction: column-reverse;
  }
`;
