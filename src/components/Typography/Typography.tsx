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
  /**
   * @deafult 'regular'
   */
  weight?: FontWeightVariant;
  /**
   * When using MUI in combination with styled/emotion, we lose access
   * to the component prop. This appears to be a limitation of Typescript;
   * doing this is a workaround:
   * 
   * https://github.com/mui/material-ui/issues/15695#issuecomment-1026602904
   */
  component?: React.ElementType;
}

const TypographyRoot = styled(MuiTypography, {
  name: 'HajimariTypography',
  slot: 'Root',
  shouldForwardProp: (prop) =>
    rootShouldForwardProp(prop) &&
    prop !== 'weight',
})<TypographyProps>(({ weight }) => ({
  fontWeight: weight ? fontWeights[weight] : 'inherit',
}));

const Typography = (props: TypographyProps): JSX.Element => (
  <TypographyRoot {...props} />
);

export default Typography;
