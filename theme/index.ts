import styled, { StyledComponent } from 'styled-components';

export type InputThemeType = {
  Input: StyledComponent<'input', object, object>,
};

const InputTheme: InputThemeType = {
  Input: styled.input`
    font-weight: inherit;
    font-family: inherit;
    background: none;
    border: none;
  `,
};

export default InputTheme;
