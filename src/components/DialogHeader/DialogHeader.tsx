import React from 'react';
import MuiDialogHeader, {
  DialogTitleProps as MuiDialogHeaderProps
} from '@mui/material/DialogTitle';

export interface DialogHeaderProps extends MuiDialogHeaderProps { }

const DialogHeader = ({
  children,
  ...props
}: DialogHeaderProps): JSX.Element => (
  <MuiDialogHeader
    sx={{
      backgroundColor: 'inherit',
      overflowX: 'hidden',
    }}
    {...props}
  >
    {children}
  </MuiDialogHeader>
);

export default DialogHeader;