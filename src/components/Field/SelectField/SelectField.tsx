import React, { useCallback, ChangeEvent } from 'react';
import MenuItem from '@mui/material/MenuItem';

import TextField, { TextFieldProps } from '../TextField';

export type SelectFieldOptions = {
  value: string;
  label: string;
};

export type SelectFieldProps = {
  options: SelectFieldOptions[];
} & TextFieldProps;

const SelectField = ({
  options,
  onChange,
  value,
  ...otherProps
}: SelectFieldProps): JSX.Element => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;
      onChange(event);
    },
    [value, onChange]
  );

  return (
    <TextField
      variant='outlined'
      select
      id='select'
      value={value}
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
