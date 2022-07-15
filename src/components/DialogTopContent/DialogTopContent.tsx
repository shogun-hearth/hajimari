import React from "react";
import MuiDialogTopContent, {
  DialogTitleProps as MuiDialogTopContentProps,
} from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

import Button from "../Button";

export interface DialogTopContentProps extends MuiDialogTopContentProps {
  showCloseButton: boolean;
  backlink?: string;
  backlinkAction?: () => void;
  onClose?: () => void;
}

const DialogTopContent = ({
  children,
  showCloseButton,
  onClose,
  backlink,
  backlinkAction,
  ...props
}: DialogTopContentProps): JSX.Element => (
  <MuiDialogTopContent
    sx={{
      backgroundColor: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
    {...props}
  >
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
  </MuiDialogTopContent>
);

export default DialogTopContent;
