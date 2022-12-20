import React, { forwardRef } from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps { };

const Box = forwardRef((props: BoxProps, ref): JSX.Element => (
  <MuiBox {...props} ref={ref} />
));

export default Box;
