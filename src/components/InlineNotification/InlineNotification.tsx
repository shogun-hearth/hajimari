import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { experimental_sx as e_sx, SxProps } from '@mui/system';

import Box, { BoxProps } from '../Box/Box';
import Typography from '../Typography';
import IconButton from '../IconButton';
import Button from '../Button/Button';
import styled from '../../theme/styled';

export enum NotificationVariant {
  info = 'info',
  warning = 'warning',
  error = 'error'
}

export interface InlineNotificationProps extends BoxProps {
  /**
   * Inline notifications are constrained to `info`, `warning`, or `error`.
   * Since the default value is `info`, the default component will have styles
   * related to that variant.
   * @default `info`
   */
  variant?: NotificationVariant;
  onClose?: (args?: any) => void;
  /**
   * 
   * @default false
   */
  showStartIcon?: boolean;
  /**
   * @optional function to do some kind of action
   */
  action?: (args?: any) => void;
  /**
   * the text of the actual button. If an `action` is provided without an `actionLabel`,
   * a standalone arrow icon will appear as the CTA
   * 
   * @default undefined
   *  */
  actionLabel?: string;
}

const NotificationRoot = styled(Box, {
  name: 'InlineNotificationRoot',
})<InlineNotificationProps>(e_sx({
  borderRadius: 8,
  border: '1px solid',
  borderColor: 'greyscale.500',
  backgroundColor: 'greyscale.100',
  borderTop: 'none',
  paddingBottom: '0.5rem',
}));

const TopHighlightRoot = styled('div', {
  name: 'TopHighlightRoot',
})<InlineNotificationProps>(({ theme, variant }) => e_sx(({
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  alignSelf: 'flex-start',
  paddingTop: 0.25,
  borderTop: '4px solid',
  /** default variant is "info" */
  borderTopColor: 'blue.500',
  ...(variant === 'warning' && {
    borderTopColor: 'yellow.500',
  }),
  ...(variant === 'error' && {
    borderTopColor: 'red.500',
  }),
})));

const NotificationContent = styled('div', { name: 'NotificationContent' })({
  paddingTop: 8,
  paddingLeft: 16,
  display: 'flex',
  justifyContent: 'space-between',
});

type ActionButtonProps = {
  label: string;
  sx?: SxProps;
};

const ActionButton = ({ label, sx }: ActionButtonProps): JSX.Element => (
  <Button
    variant="text"
    color="blue"
    endIcon={<ArrowForwardIcon />}
    sx={sx}
  >
    {label}
  </Button>
);

const variantIcons: Record<NotificationVariant, React.ReactNode> = {
  [NotificationVariant.info]: <InfoOutlinedIcon sx={{ fontSize: 24 }} />,
  [NotificationVariant.warning]: <WarningAmberOutlinedIcon sx={{ fontSize: 24 }} />,
  [NotificationVariant.error]: <CancelOutlinedIcon sx={{ fontSize: 24 }} />,
};

const InlineNotification = ({
  children,
  variant = NotificationVariant.info,
  onClose,
  showStartIcon,
  action,
  actionLabel = '',
  ...props
}: InlineNotificationProps): JSX.Element => (
  <NotificationRoot {...props}>
    <TopHighlightRoot variant={variant} />
    <NotificationContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {showStartIcon &&
          <Box sx={{ mr: 1, mt: 0.5 }}>
            {variantIcons[variant]}
          </Box>
        }
        <Typography variant="p2" weight="medium">
          {children}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {action &&
          <ActionButton
            label={actionLabel}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          />
        }
        {onClose &&
          <IconButton onClick={onClose} sx={{ mr: 1 }}>
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>
        }
      </Box>
    </NotificationContent>
    {action &&
      <ActionButton
        label={actionLabel}
        sx={{
          ml: showStartIcon ? 4 : 0,
          mt: -1.5,
          display: { sm: 'none' },
        }}
      />
    }
  </NotificationRoot>
);

export default InlineNotification;
