import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Box from '../Box';
import Typography from '../Typography';
import styled from '../../theme/styled';

export interface MenuTopContentProps {
  onClose?: (args?: any) => void;
  title: string;
}

const MenuTopContentRoot = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const MenuTopContent = ({ onClose, title }: MenuTopContentProps) => (
  <MenuTopContentRoot>
    <Typography variant='p1' weight='semibold'>
      {title}
    </Typography>
    <IconButton onClick={onClose} sx={{ ml: 'auto', px: 1 }}>
      <CloseIcon sx={{ fontSize: 24 }} />
    </IconButton>
  </MenuTopContentRoot>
);

export default MenuTopContent;
