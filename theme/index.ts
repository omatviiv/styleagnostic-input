import styled, { StyledComponent } from 'styled-components';

export type InputThemeType = {
  Input: StyledComponent<'input', object, object>,
};

const InputTheme: InputThemeType = {
  Input: styled.input`
    padding: 0.5rem;
    font-weight: inherit;
    background: none;
    border: none;
  `,
};

export default InputTheme;
