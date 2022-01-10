import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BoxProps = {
  children: React.ReactNode;
} & MuiBoxProps;

const Box = ({ children, ...props }: BoxProps): JSX.Element => (
  <MuiBox {...props}>
    {children}
  </MuiBox>
);

export default Box;