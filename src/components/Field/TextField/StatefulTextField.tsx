import React, { useState } from 'react';

import TextField, { TextFieldProps } from './TextField';

const StatefulTextField = (props: TextFieldProps) => {
  const [value, setValue] = useState('');

  return (
      <TextField value={value} onChange={(event) => setValue(event.target.value)} {...props} />
  );
};

export default StatefulTextField;
