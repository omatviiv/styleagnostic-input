import styled from 'styled-components';

export type InputThemeType = {
  Input: React.ElementType,
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
