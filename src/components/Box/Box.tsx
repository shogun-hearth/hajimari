import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps { };

const Box = (props: BoxProps): JSX.Element => (
  <MuiBox {...props} />
);

export default Box;