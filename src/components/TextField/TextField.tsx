import React, { useCallback, useMemo, useState } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import { Mask, maskTypes } from './utils';

export type TextFieldProps = {
  mask: Mask;
  value?: string;
} & MuiTextFieldProps;

const TextField = ({ mask = 'default', value, onChange, ...otherProps }: TextFieldProps): JSX.Element => {
  const maskSetting = useMemo(() => maskTypes[mask], [mask]);

  const denormalizedValue = useMemo(() => (
    value ? maskSetting.denormalize(value) : value
  ), [value]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!onChange) {
      return;
    }

    const length = event.target.value.length;

    // don't allow change in the middle if fixedCursor set to true
    if (
      mask !== 'default' &&
      event.target.setSelectionRange &&
      event.target.selectionStart !== length
    ) {
      event.target.setSelectionRange(length, length);
      return;
    }

    onChange({
      ...event,
      target: {
        ...event.target,
        value: maskSetting.normalize(event.target.value, value?.toString()),
        name: event.target.name,
      },
    });
  }, [maskSetting.normalize, value, onChange, mask]);

  return (
    <MuiTextField
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      value={denormalizedValue}
      sx={{
        '& .MuiOutlinedInput-input': {
          paddingTop: '12px',
          paddingBottom: '12px',
        },
      }}
      {...maskSetting.extraProps}
      {...otherProps}
    />
  );
};

export default TextField;

export const StatefulTextField = (props: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
    <TextField value={value} onChange={(event) => setValue(event.target.value)} {...props} />
  );
};
