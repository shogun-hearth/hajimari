import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';

import theme from '../../theme';

export interface CardColorProperty {
  borderColor?: HajimariColor;
  bg?: CommonColor;
}

export interface CardProps extends MuiCardProps, CardColorProperty {}

const Card = ({
  borderColor,
  children,
  bg = 'basic100',
  sx,
  ...props
}: CardProps): JSX.Element => (
  <MuiCard
    elevation={0}
    sx={{
      border: borderColor ? `1px solid` : 'inherit',
      borderColor: borderColor,
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
