import React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

import colors from '../../tokens/colors';

export type FontWeightVariant = 'regular' | 'medium' | 'semibold';
export type FontWeightValue = 400 | 500 | 600;

type FontWeight = {
  [w in FontWeightVariant]: FontWeightValue;
};

export const fontWeights: FontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

export interface TypographyProps extends MuiTypographyProps {
  weight?: FontWeightVariant;
  color?: Color;
}

const Typography = ({
  weight,
  color,
  sx,
  ...otherProps
}: TypographyProps): JSX.Element => (
  <MuiTypography
    sx={{
      fontWeight: weight ? fontWeights[weight] : 'inherit',
      color: color ? colors[color] : 'inherit',
      ...sx,
    }}
    {...otherProps}
  />
);

export default Typography;
