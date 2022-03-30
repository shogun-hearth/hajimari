import { useState } from 'react';

import Select, { SelectProps } from './Select';

const StatefulSelect = (props: Omit<SelectProps, 'onChange'>) => {
  const [value, setValue] = useState(props.items[0].value);

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default StatefulSelect;
