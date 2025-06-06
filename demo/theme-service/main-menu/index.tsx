import React, {useState, useEffect, useRef} from 'react';
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
  const popupRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current
        && !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Attach event listener only when popup is open
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Clean up the event listener when component unmounts or popup closes
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const mainMenuCtaText = isOpen ? 'close' : 'open';

  const onMenuClick = () => setIsOpen(!isOpen);

  return createPortal(<MainMenuContainer $opened={isOpen} ref={popupRef}>
    <MenuHeader
      onClick={onMenuClick}
    >
      <div>{version && `${version} |`}&nbsp;</div>
      <div>{mainMenuCtaText} menu</div>
    </MenuHeader>
    <MenuItems $show={isOpen}>
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
