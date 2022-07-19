import React from 'react';
import MuiDialogHeader, {
  DialogTitleProps as MuiDialogHeaderProps
} from '@mui/material/DialogTitle';

import styled from '../../theme/styled';

export interface DialogHeaderProps extends MuiDialogHeaderProps { }

const DialogHeaderRoot = styled(MuiDialogHeader)(() => ({
  backgroundColor: 'inherit',
  overflowX: 'hidden',
}));

const DialogHeader = ({
  children,
  ...props
}: DialogHeaderProps): JSX.Element => (
  <DialogHeaderRoot {...props}>
    {children}
  </DialogHeaderRoot>
);

export default DialogHeader;
