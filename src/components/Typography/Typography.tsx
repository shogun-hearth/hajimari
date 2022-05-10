import React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

import styled, { rootShouldForwardProp } from '../../theme/styled';

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
}

const TypographyRoot = styled(MuiTypography, {
  name: 'HajimariTypography',
  slot: 'Root',
  shouldForwardProp: (prop) =>
    rootShouldForwardProp(prop) &&
    prop !== 'weight',
  overridesResolver: ({ variant }: TypographyProps, styles) => ([
    styles.root,
    variant && styles[variant],
  ]),
  skipVariantsResolver: true,
})<TypographyProps>(({ weight }) => ({
  fontWeight: weight ? fontWeights[weight] : 'inherit',
}));

const Typography = (props: TypographyProps): JSX.Element => (
  <TypographyRoot {...props} />
);

export default Typography;
