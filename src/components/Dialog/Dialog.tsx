import React from 'react';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps { }

const Dialog = ({
  open,
  children,
  maxWidth,
  sx,
  ...props
}: DialogProps): JSX.Element => (
  <MuiDialog
    open={open}
    maxWidth={maxWidth}
    sx={{
      border: 'inherit',
      borderRadius: '16px',
      ...sx,
    }}
    {...props}
  >
    {children}
  </MuiDialog>
);

export default Dialog;