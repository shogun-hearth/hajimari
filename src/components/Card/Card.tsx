import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';

import theme from '../../theme';

export interface CardColorProperty {
  border?: Color;
  bg?: Color;
}

export interface CardProps extends MuiCardProps, CardColorProperty { }

const Card = ({
  border,
  children,
  bg = 'basic100',
  sx,
  ...props
}: CardProps): JSX.Element => (
  <MuiCard
    elevation={0}
    sx={{
      border: border ? `1px solid ${theme.palette.common[border]}` : 'inherit',
      borderRadius: '16px',
      '&.MuiPaper-root': {
        backgroundColor: theme.palette.common[bg],
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </MuiCard>
);

export default Card;