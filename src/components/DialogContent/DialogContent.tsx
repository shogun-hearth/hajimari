import React from 'react';
import { DialogContent as MuiDialogContent, DialogContentText } from '@mui/material';
import { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';

export interface DialogContentProps extends MuiDialogContentProps {
}

const DialogContent = ({
  children,
  sx,
  ...otherProps
}: DialogContentProps): JSX.Element => (
  <>
    <MuiDialogContent
      // TODO(design_system): move this out into a composable module
      sx={{
        '&.MuiDialogContent-root': {
          padding: `24px 24px`,
          backgroundColor: 'inherit',
        },
        ...sx,
      }}
      {...otherProps}
    >
      <DialogContentText>
        {children}
      </DialogContentText>
    </MuiDialogContent>
  </>
);

export default DialogContent;