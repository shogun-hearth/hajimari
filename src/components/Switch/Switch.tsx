import React from 'react';
import Switch from '@mui/material/Switch';
// import { Switch, SwitchProps } from '@mui/material';

export type SwitchProps = {
    enabled: boolean,
    selected: boolean,
};

const DifSwitch = ({
    width = '100%',
    ...props
}): JSX.Element => (
    <div>
        <div>Stuff</div>
        <Switch  />
    </div>
  );
  
export default DifSwitch;