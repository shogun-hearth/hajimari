import React from 'react';
import { CardHeader as MuiCardHeader, Divider } from '@mui/material';
import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

import { CardColorProperty } from '../Card/Card';

export interface CardHeaderProps extends MuiCardHeaderProps, CardColorProperty {
  bottomDivider?: boolean;
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