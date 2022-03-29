import React from 'react';
import MuiDialogTopContent, {
  DialogTitleProps as MuiDialogTopContentProps
} from '@mui/material/DialogTitle';
import Button from '../Button';

import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
export interface DialogTopContentProps extends MuiDialogTopContentProps {
    showCloseButton: boolean;
    backlink?: string;
 }

const DialogTopContent = ({
  children,
  showCloseButton,
  backlink,
  ...props
}: DialogTopContentProps): JSX.Element => (
  <MuiDialogTopContent
    sx={{
      backgroundColor: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
    }}
    {...props}
  >
    { backlink &&
        <Button
          variant="text"
          sx={{
            maxWidth: '10%',
          }}
        >
            <ArrowBackIcon />
            {backlink}
        </Button>
    }
    { showCloseButton &&
      <IconButton>
            <CloseIcon />
        </IconButton>
    }

  </MuiDialogTopContent>
);

export default DialogTopContent;