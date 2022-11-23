import React from 'react';
import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
  Theme,
} from '@mui/material';
import { experimental_sx as e_sx } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

import styled from '../../theme/styled';
import Button from '../Button';
import Box from '../Box';

export interface DialogActionProps extends MuiDialogActionsProps {
  /**
   * callback for the primary action that is hooked up to a `Button`
   * with `primary` variant and `blue` color.
   */
  primaryAction?: (arg?: any) => void;
  /** label/CTA for the `Button` that calls `primaryAction` */
  primaryCta?: React.ReactNode;
  /**
   * callback for the primary action that is hooked up to a `Button`
   * with `text` variant and `blue` color.
   */
  secondaryAction?: (arg?: any) => void;
  /** label/CTA for the `Button` that calls `secondaryAction` */
  secondaryCta?: React.ReactNode;
}

const DialogActionsRoot = styled(MuiDialogActions)(
  e_sx({
    border: 'inherit',
    borderRadius: '16px',
    display: 'flex',
    px: 3,
    pb: 3,
    maxWidth: '100%',
    flex: 1,
  })
);

const DialogActions = ({
  primaryAction,
  primaryCta,
  secondaryAction,
  secondaryCta,
  children,
  ...otherProps
}: DialogActionProps): JSX.Element => {
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('md'));

  return (
    <DialogActionsRoot {...otherProps}>
      {children}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          alignItems: 'center',
          width: { xs: '100%', sm: 'unset' },
        }}
      >
        {secondaryAction && secondaryCta && (
          <Button
            variant="text"
            onClick={secondaryAction}
            fullWidth={isMobile}
            sx={{ mr: { xs: 'unset', sm: 1 } }}
          >
            {secondaryCta}
          </Button>
        )}
        {primaryAction && primaryCta && (
          <Button
            variant="primary"
            color="blue"
            onClick={primaryAction}
            fullWidth={isMobile}
            sx={{ mb: { xs: 1, sm: 'unset' } }}
          >
            {primaryCta}
          </Button>
        )}
      </Box>
    </DialogActionsRoot>
  );
};

export default DialogActions;
