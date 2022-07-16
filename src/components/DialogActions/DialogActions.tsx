import React from "react";
import { DialogActions as MuiDialogActions } from "@mui/material";
import { DialogActionsProps as MuiDialogActionsProps } from "@mui/material";

export interface DialogActionProps extends MuiDialogActionsProps {}

const DialogActions = ({
  children,
  sx,
  ...otherProps
}: DialogActionProps): JSX.Element => (
  <MuiDialogActions
    sx={{
      display: "flex",
      px: 3,
      pb: 2,
      ...sx,
    }}
    {...otherProps}
  >
    {children}
  </MuiDialogActions>
);

export default DialogActions;
