import React from 'react';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps { }

const Dialog = ({
  fullWidth,
  maxWidth,
  children,
  ...props
}: DialogProps): JSX.Element => <MuiDialog {...props}>{children}</MuiDialog>;

export default Dialog;
