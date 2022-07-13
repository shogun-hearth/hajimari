import React from 'react';
import { experimental_sx as e_sx, SxProps } from '@mui/system';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

import Box, { BoxProps } from '../Box/Box';
import Typography from '../Typography';
import IconButton from '../IconButton';
import Button from '../Button';
import styled from '../../theme/styled';

export interface BannerProps extends BoxProps {
  /**
   * the bolded title at the top of the banner
   * 
   * @optional
   * */
  title?: string;
  /** the description within the banner; the only required prop */
  description: string;
  /**
   * determines whether the `InfoOutlinedIcon` appears to the left of the title
   * 
   * @default false
  */
  showStartIcon?: boolean;
  /**
   * if defined, renders a `CloseIcon` at the top right of the banner, which
   * will call the function passed to `onClose` on click
   * 
   * @optional
   */
  onClose?: (args?: any) => void;
  /**
   * if defined in conjunction with `primaryActionLabel`, renders a primary
   * `Button` for a primary action
   * 
   * @optional
   */
  primaryAction?: (args?: any) => void;
  /**
   * `Button` label for the primary action
   * 
   * @optional
   */
  primaryActionLabel?: string;
  /**
   * if defined in conjunction with `secondaryActionLabel`, renders a text
   * `Button` for a secondary action
   * 
   * @optional
   */
  secondaryAction?: (args?: any) => void;
  /**
   * `Button` label for the secondary action
   * 
   * @optional
   */
  secondaryActionLabel?: string;
}

const BannerRoot = styled('div', { name: 'BannerRoot' })(e_sx({
  padding: '16px 24px',
  borderRadius: 8,
  backgroundColor: 'blue.100',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));

const Banner = ({
  title,
  description,
  showStartIcon = false,
  onClose,
  primaryAction,
  primaryActionLabel,
  secondaryAction,
  secondaryActionLabel,
}: BannerProps): JSX.Element => (
  <BannerRoot>
    {onClose &&
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 2,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
    }
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
      {showStartIcon && <InfoOutlinedIcon sx={{ mr: 0.5 }} />}
      <Typography variant="p2" weight="semibold">
        {title}
      </Typography>
    </Box>
    <Typography variant="p3">
      {description}
    </Typography>
    <Box
      sx={{
        mt: { xs: 2, sm: 1, md: 'unset' },
        display: 'flex',
        aignItems: {
          sm: 'center',
        },
        alignSelf: {
          xs: 'stretch',
          sm: 'flex-end',
        },
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        flexFlow: {
          xs: 'column-reverse',
          sm: 'unset',
        },
      }}
    >
      {secondaryAction && secondaryActionLabel &&
        <Button
          variant="text"
          color="blue"
          onClick={secondaryAction}
          sx={{
            mr: { sm: 3 },
            mt: { xs: 2, sm: 'unset' },
            '&:hover': {
              backgroundColor: 'blue.300',
            },
          }}
        >
          {secondaryActionLabel}
        </Button>
      }
      {primaryAction && primaryActionLabel &&
        <Button
          variant="primary"
          color="blue"
          endIcon={<ArrowForwardIcon />}
          onClick={primaryAction}
        >
          {primaryActionLabel}
        </Button>
      }
    </Box>
  </BannerRoot>
);

export default Banner;
