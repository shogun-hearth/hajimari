import React from 'react';
import MuiDialogTopContent, {
  DialogTitleProps as MuiDialogTopContentProps
} from '@mui/material/DialogTitle';
import Button from '../Button';

import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogTopContentProps extends MuiDialogTopContentProps {
    closeButtonVisible?: boolean;
    backlinkVisible?: boolean;
    link?: string;
 }

const DialogTopContent = ({
  children,
  backlinkVisible,
  closeButtonVisible,
  link,
  ...props
}: DialogTopContentProps): JSX.Element => (
  <MuiDialogTopContent
    sx={{
      backgroundColor: 'inherit',
      display: 'flex',
    }}
    {...props}
  >
    {
    backlinkVisible &&
        <Button
          variant="secondary"
          sx={{ border: 'none' }}
        >
            <ArrowBackIcon />
            {link}

        </Button>
    }
    <IconButton>
        {/* close */}
        <CloseIcon />
    </IconButton>

  </MuiDialogTopContent>
);

export default DialogTopContent;