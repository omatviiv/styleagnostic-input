// TODO: once ready use Popup component for MainMenu
// so that it has proper click outside handling
import React, {useState} from 'react';
import {createPortal} from 'react-dom';

import {
  MainMenuContainer, MenuHeader, MenuItems, MenuItemStyle,
} from './style';

type MainMenuProps = {
  version?: string,
  children: React.ReactNode;
};
const MainMenu: React.FC<MainMenuProps> = ({
  version = '', children,
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  const mainMenuCtaText = opened ? 'close' : 'open';

  const onMenuClick = () => setOpened(!opened);

  return createPortal(<MainMenuContainer $opened={opened}>
    <MenuHeader
      onClick={onMenuClick}
    >
      { version && `${version} | `}{mainMenuCtaText} menu
    </MenuHeader>
    <MenuItems $show={opened}>
      {children}
    </MenuItems>
  </MainMenuContainer>, document.body);
};

type MenuItemProps = {
  children: React.ReactNode;
};
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
}) => <MenuItemStyle>
  {children}
</MenuItemStyle>;

export default MainMenu;
