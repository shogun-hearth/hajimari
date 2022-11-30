import React from 'react';
import MuiDialogHeader, {
  DialogTitleProps as MuiDialogHeaderProps
} from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

import styled from '../../theme/styled';

export interface DialogHeaderProps extends MuiDialogHeaderProps {
  divider?: boolean;
}

const DialogHeaderRoot = styled(MuiDialogHeader)(() => ({
  backgroundColor: 'inherit',
  overflowX: 'hidden',
}));

const DialogHeader = ({
  children,
  divider = false,
  ...props
}: DialogHeaderProps): JSX.Element => (
  <>
    {divider && <Divider light variant="fullWidth" sx={{ mx: -3, mb: 1 }} />}
    <DialogHeaderRoot {...props}>
      {children}
    </DialogHeaderRoot>
  </>
);

export default DialogHeader;
