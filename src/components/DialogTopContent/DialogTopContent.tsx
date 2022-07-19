import React from "react";
import MuiDialogTopContent, {
  DialogTitleProps as MuiDialogTopContentProps,
} from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

import styled from '../../theme/styled';
import Button from "../Button";

export interface DialogTopContentProps extends MuiDialogTopContentProps {
  showCloseButton: boolean;
  backlink?: string;
  backlinkAction?: () => void;
  onClose?: () => void;
}

const DialogTopContentRoot = styled(MuiDialogTopContent)(() => ({
  backgroundColor: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const DialogTopContent = ({
  children,
  showCloseButton,
  onClose,
  backlink,
  backlinkAction,
  ...props
}: DialogTopContentProps): JSX.Element => (
  <DialogTopContentRoot {...props}>
    {backlink && (
      <Button
        variant="text"
        sx={{
          maxWidth: "10%",
          m: 0,
        }}
        onClick={backlinkAction}
      >
        <ArrowBackIcon sx={{ mr: 2 }} />
        {backlink}
      </Button>
    )}
    {showCloseButton && (
      <IconButton onClick={onClose} sx={{ ml: 'auto', px: 1 }}>
        <CloseIcon sx={{ fontSize: 24 }} />
      </IconButton>
    )}
  </DialogTopContentRoot>
);

export default DialogTopContent;
