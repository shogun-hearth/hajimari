import React from 'react';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

import styled from '../../theme/styled';

export interface DialogProps extends MuiDialogProps { }

const DialogRoot = styled(MuiDialog)(() => ({
  border: 'inherit',
  borderRadius: '16px',
}));

const Dialog = ({
  children,
  sx,
  ...props
}: DialogProps): JSX.Element => (
  <DialogRoot {...props}>
    {children}
  </DialogRoot>
);

export default Dialog;
