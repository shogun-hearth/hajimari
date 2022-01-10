import React from 'react';
import MuiCardContent, {
  CardContentProps as MuiCardContentProps
} from '@mui/material/CardContent';

import { CardColorProperty } from '../Card/Card';

export interface CardContentProps extends MuiCardContentProps, CardColorProperty { }

const CardContent = ({
  children,
  bg,
  ...props
}: CardContentProps): JSX.Element => (
  <MuiCardContent
    sx={{
      backgroundColor: bg ?? 'inherit'
    }}
    {...props}
  >
    {children}
  </MuiCardContent>
);

export default CardContent;