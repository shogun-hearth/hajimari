import React from 'react';

import Menu, { MenuProps } from '../Menu';

export interface SuggestedActionHamburgerMenuProps extends MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (args?: any) => void;
}

const SuggestedActionHamburgerMenu = ({
  open,
  anchorEl,
  onClose,
  children,
  ...props
}: SuggestedActionHamburgerMenuProps) => (
  <Menu
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    sx={{ '& .MuiPaper-root': { width: '25%', minWidth: '270px' } }}
    {...props}
  >
    {children}
  </Menu>
);

export default SuggestedActionHamburgerMenu;
