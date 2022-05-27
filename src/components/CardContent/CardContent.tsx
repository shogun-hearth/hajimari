import React from 'react';
import MuiCardContent, {
  CardContentProps as MuiCardContentProps
} from '@mui/material/CardContent';

export interface CardContentProps extends MuiCardContentProps {
  border?: CommonColor;
  bg?: CommonColor;
}

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