import React from 'react';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps { }

const Dialog = ({
  children,
  sx,
  ...props
}: DialogProps): JSX.Element => (
  <MuiDialog
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
