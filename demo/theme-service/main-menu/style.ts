import styled from 'styled-components';

import {verywhite, blueb, blue, cyan, yellowb} from '../color';
import {media} from '../';

type MainMenuContainerProps = {
  opened: boolean;
};
export const MainMenuContainer = styled.div<MainMenuContainerProps>`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  color: ${cyan()};
  box-shadow: 0 0 1rem ${cyan(0.5)};
  max-width: 50vw;
  background-color: ${verywhite()};

  @media (max-width: ${media.xs}) {
    width: 100vw;
    max-width: 100vw;
    position: ${ pr => pr.opened ? 'absolute' : 'relative'};
  }
`;

export const MenuHeader = styled.div`
  font-weight: bold;
  background-color: ${blue()};
  color: ${yellowb()};
  padding: 0.5rem 1rem;
  flex-grow: 1;
  cursor: pointer;
`;

type MenuItemsProps = {
  show?: boolean;
};
export const MenuItems = styled.div<MenuItemsProps>`
  display: ${pr => pr.show ? 'flex' : 'none'};
  padding: 0.5rem 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: ${blueb(0.3)};
`;

export const MenuItemStyle = styled.div`
  &:hover {
    cursor: pointer;
    font-weight: bold;
  };
`;
