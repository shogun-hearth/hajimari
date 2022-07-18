import React from 'react';
import { DialogContent as MuiDialogContent, DialogContentText } from '@mui/material';
import { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';

import styled from '../../theme/styled';

export interface DialogContentProps extends MuiDialogContentProps { }

const DialogContentRoot = styled(MuiDialogContent)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflowX: 'hidden',
  '&.MuiDialogContent-root': {
    padding: '48px 24px',
    backgroundColor: 'inherit',
  },
  minWidth: 300,
}));

const DialogContent = ({
  children,
  ...otherProps
}: DialogContentProps): JSX.Element => (
  <>
    <DialogContentRoot
      {...otherProps}
    >
      <DialogContentText>
        {children}
      </DialogContentText>
    </DialogContentRoot>
  </>
);

export default DialogContent;