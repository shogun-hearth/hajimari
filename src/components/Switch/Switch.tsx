import React from "react";
import MuiSwitch, { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";

export type SwitchProps = {
  selected: boolean;
} & MuiSwitchProps;

const Switch = ({ ...props }: SwitchProps): JSX.Element => (
  <MuiSwitch {...props} />
);

export default Switch;
