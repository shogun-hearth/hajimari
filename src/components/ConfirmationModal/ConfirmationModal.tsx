import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogProps, Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CloseIcon from '@mui/icons-material/Close';

import Box from '../Box';
import Button from '../Button';
import IconButton from '../IconButton';
import Typography from '../Typography';

export type ConfirmationModalVariant =
  | 'greyscale'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red';

export interface ConfirmationModalProps extends Omit<DialogProps, 'title'> {
  /* sets color of buttons */
  variant?: ConfirmationModalVariant;
  /* sets whether modal is open */
  open: boolean;
  /* function called when modal is closed */
  onClose: () => void;
  /**
   * function called when modal is opened
   * 
   * @optional
   */
  onOpen?: () => void;
  /**
   * modal header
   * 
   * @optional
   */
  title?: React.ReactNode;
  /* content between header and buttons */
  body: React.ReactNode;
  /* confirm action */
  primaryAction: () => void;
  /* confirm action button copy */
  primaryActionCopy: string;
  /* cancel action button copy */
  secondaryActionCopy: string;
  /**
   * action when user clicks link back
   * 
   * @optional
   */
  linkBackAction?: () => void;
  /**
   * copy for link back
   * 
   * @optional
   */
  linkBackCopy?: React.ReactNode;
}


const ConfirmationModal = ({
  variant = 'blue',
  open,
  onClose,
  onOpen = () => {},
  title,
  body,
  primaryAction,
  primaryActionCopy,
  secondaryActionCopy,
  linkBackAction,
  linkBackCopy,
  ...otherProps
}: ConfirmationModalProps): JSX.Element => {
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('md'));

  useEffect(() => {
    if (open) onOpen();
  }, [open])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 8,
        },
      }}
      fullWidth
      {...otherProps}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: 3,
          mx: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          {linkBackCopy && linkBackAction &&
            <Button
              variant="text"
              color="blue"
              onClick={linkBackAction}
            >
              {typeof linkBackCopy === 'string' ?
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'blue.500',
                  }}
                >
                  <KeyboardArrowLeftIcon color="inherit" sx={{ fontSize: 22 }} />
                  <Typography variant="p1" weight="medium">
                    {linkBackCopy}
                  </Typography>
                </Box> :
                linkBackCopy
              }
            </Button>
          }
          <IconButton onClick={onClose} sx={{ ml: 'auto' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ px: { xs: 3, sm: 4 }, mb: 7.5 }}>
          {title &&
            <Box sx={{ mb: { xs: 3, sm: 4 } }}>
              {typeof title === 'string' ?
                <Typography
                  variant={isMobile ? 'h2' : 'h1'}
                  weight="semibold"
                >
                  {title}
                </Typography> :
                title
              }
            </Box>
          }
          {typeof body === 'string' ?
            <Typography variant={isMobile ? 'p2' : 'p1'}>
              {body}
            </Typography> :
            body
          }
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'flex-end',
          }}
        >
          <Button
            color={variant}
            variant="text"
            onClick={onClose}
            fullWidth={isMobile}
            sx={{
              mr: { xs: 0, sm: 2 },
              mb: { xs: 1, sm: 0 },
              // overrides styling on text buttons that prevents
              // centering for full-width buttons
              ml: 0,
            }}
          >
            {secondaryActionCopy}
          </Button>
          <Button
            color={variant}
            variant="primary"
            onClick={primaryAction}
          >
            {primaryActionCopy}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmationModal;
