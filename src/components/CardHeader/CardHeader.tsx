import React from 'react';
import Divider from '@mui/material/Divider';
import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

export interface CardHeaderProps extends MuiCardHeaderProps {
  bottomDivider?: boolean;
  border?: CommonColor;
  bg?: CommonColor;
}

const CardHeader = ({
  bottomDivider,
  children,
  bg,
  sx,
  ...otherProps
}: CardHeaderProps): JSX.Element => (
  <>
    <MuiCardHeader
      // TODO(design_system): move this out into a composable module
      sx={{
        '&.MuiCardHeader-root': {
          padding: `24px 24px ${bottomDivider ? '16px' : 0}`,
          backgroundColor: bg ?? 'inherit',
          '.MuiCardHeader-action': {
            alignSelf: 'center',
          },
          '.MuiCardHeader-avatar': {
            alignSelf: 'center',
          },
        },
        ...sx,
      }}
      title={children}
      {...otherProps}
    />
    {bottomDivider &&
      <Divider />
    }
  </>
);

export default CardHeader;