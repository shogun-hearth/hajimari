import React from 'react';

import Menu, { MenuProps } from '../Menu';
import styled from '../../theme/styled';
export interface SuggestedActionHamburgerMenuProps extends MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (args?: any) => void;
}

const MenuRoot = styled(Menu)(() => ({
  '& .MuiPaper-root': { width: '25%', minWidth: '270px' },
}));

const SuggestedActionHamburgerMenu = ({
  open,
  anchorEl,
  onClose,
  children,
  ...props
}: SuggestedActionHamburgerMenuProps) => (
  <MenuRoot
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    {...props}
  >
    {children}
  </MenuRoot>
);

export default SuggestedActionHamburgerMenu;
