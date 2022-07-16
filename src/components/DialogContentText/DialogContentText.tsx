import React from 'react';
import { DialogContent as MuiDialogContent, DialogContentText } from '@mui/material';
import { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';

export interface DialogContentProps extends MuiDialogContentProps { }

const DialogContent = ({
  children,
  sx,
  ...otherProps
}: DialogContentProps): JSX.Element => (
  <>
    <MuiDialogContent
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        overflowX: 'hidden',
        '&.MuiDialogContent-root': {
          px: 3,
          py: 6,
          backgroundColor: 'inherit',
        },
        minWidth: 300,
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
