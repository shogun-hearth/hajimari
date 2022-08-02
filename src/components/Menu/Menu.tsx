import React from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

import styled from '../../theme/styled';

export interface MenuProps extends MuiMenuProps {
  /**
   * pass in menu items or buttons as children
   * @default undefined
   */
  children: React.ReactNode;
  /**
   * an HTML element that's used to set the position of the menu
   * @default undefined
   */
  anchorEl: HTMLElement;
  /**
   * if true, menu is shown
   * @default undefined
   */
  open: boolean;
}

const MenuRoot = styled(MuiMenu)(() => ({
  '& .MuiPaper-root': {
    padding: '16px 24px',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    width: '200px',
  },
  '& .MuiMenu-list .MuiButton-root': {
    margin: 'auto',
    width: '95%',
    marginTop: '10px',
  },
}));

const Menu = ({ children, anchorEl, open }: MenuProps) => (
  <MenuRoot anchorEl={anchorEl} open={open}>
    {children}
  </MenuRoot>
);

export default Menu;
