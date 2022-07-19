import React from "react";
import { DialogActions as MuiDialogActions } from "@mui/material";
import { DialogActionsProps as MuiDialogActionsProps } from "@mui/material";

import styled from '../../theme/styled';

export interface DialogActionProps extends MuiDialogActionsProps { }

const DialogActionsRoot = styled(MuiDialogActions)(() => ({
  border: 'inherit',
  borderRadius: '16px',
  display: 'flex',
  px: 3,
  pb: 2,
}));

const DialogActions = ({
  children,
  sx,
  ...otherProps
}: DialogActionProps): JSX.Element => (
  <DialogActionsRoot {...otherProps}>
    {children}
  </DialogActionsRoot>
);

export default DialogActions;
