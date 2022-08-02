import React from 'react';

import Menu, { MenuProps } from '../Menu';

export interface SuggestedActionHamburgerMenuProps extends MenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: (args?: any) => void;
}

/**
 *
 * 1. View workflow details
 *  /dashboard/clients/${homeownerId}/quote/${quoteId}
 * 2. Dismiss
 *  suggestedActionId
 * 3. Don't show this again
 * suggestedActionTypeID
 */

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
    sx={{ '& .MuiPaper-root': { width: '30%', minWidth: '270px' } }}
    {...props}
  >
    {children}
  </Menu>
);

export default SuggestedActionHamburgerMenu;
