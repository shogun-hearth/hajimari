import React from 'react';
import { BoxProps as MuiBoxProps } from '@mui/material/Box';
export declare type BoxProps = {
    children: React.ReactNode;
} & MuiBoxProps;
declare const Box: ({ children, ...props }: BoxProps) => JSX.Element;
export default Box;
