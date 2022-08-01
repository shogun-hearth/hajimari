import React from 'react';
import Typography from '../Typography';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

import styled from '../../theme/styled';

export interface DialogProps extends MuiDialogProps {}

const Dialog = ({
  fullWidth,
  maxWidth,
  children,
  ...props
}: MuiDialogProps) => <MuiDialog {...props}>{children}</MuiDialog>;

export default Dialog;
