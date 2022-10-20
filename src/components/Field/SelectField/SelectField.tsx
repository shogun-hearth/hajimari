import React, { useState, ChangeEvent } from 'react';
import MenuItem from '@mui/material/MenuItem';

import TextField, { TextFieldProps } from '../TextField';

type SelectFieldOptions = {
  value: string;
  label: string;
};

export type SelectFieldProps = {
  options: SelectFieldOptions[];
} & TextFieldProps;

const SelectField = ({
  options,
  ...otherProps
}: SelectFieldProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <TextField
      variant='outlined'
      select
      id='select'
      value={selectedValue}
      onChange={handleChange}
      sx={{ minWidth: '100px' }}
      {...otherProps}
    >
      {options.map((option, idx) => (
        <MenuItem value={option.value} key={idx}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
