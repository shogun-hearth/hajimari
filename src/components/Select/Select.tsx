import { useRef } from 'react';
import MaterialSelect, { SelectChangeEvent, SelectProps as MUISelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import styled from '@mui/material/styles/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledFormControl = styled(FormControl)({
  display: 'flex',
  width: '100%',
  flex: 1,
  minWidth: 300,
});

type Option<T extends string | number> = {
  value: T;
  label: string;
}

export type SelectProps<T extends string | number = string> = {
  name: string;
  error?: React.ReactNode;
  label: string;
  items: Option<T>[];
  hideErrorMessage?: boolean;
  onChange: (
    event: SelectChangeEvent<T>,
    child: React.ReactNode,
  ) => void;
  helperText?: React.ReactNode;
  formControlProps?: FormControlProps;
} & Omit<MUISelectProps<T>, 'error' | 'onChange'>;

function Select<T extends string | number = string>({
  value,
  items,
  name,
  error,
  label,
  onChange,
  // color = 'primary500',
  autoWidth = false,
  multiple = false,
  native = false,
  inputProps = {},
  hideErrorMessage = false,
  helperText,
  formControlProps = {},
  IconComponent = KeyboardArrowDownIcon,
  ...selectProps
}: SelectProps<T>): JSX.Element {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleChange = (
    event: SelectChangeEvent<T>,
    child: React.ReactNode,
  ): void => {
    if (onChange) {
      onChange(event, child);
    }
  };

  const ItemComponent = native ? 'option' : MenuItem;

  const caption = (!hideErrorMessage && error) ? error : helperText;

  return (
    <StyledFormControl variant="outlined" error={Boolean(error)} {...formControlProps}>
      <InputLabel
        id={`select-label-${name}`}
        ref={labelRef}
        shrink
        sx={{ color: 'common.basic1100' }}
      >
        {label}
      </InputLabel>
      <MaterialSelect<T>
        value={value ?? '' as T} // always controlled for now
        name={name}
        onChange={handleChange}
        multiple={multiple}
        autoWidth={autoWidth}
        native={native}
        IconComponent={IconComponent}
        input={
          label ?
            <OutlinedInput label={label} notched /> :
            undefined
        }
        inputProps={{
          error: error != null ? error : undefined,
          notched: 'true',
          ...inputProps,
        }}
        labelId={`select-label-${name}`}
        sx={{
          // sets the hover color for the select input border
          '&:hover': {
            '&& fieldset': {
              borderColor: `common.${selectProps.color}`, // move to theme -- rather than common colors, use 
            },
          },
        }}
        {...selectProps}
      >
        {native && value == null &&
          <ItemComponent value="">{''}</ItemComponent>
        }
        {items.map(option => (
          <ItemComponent
            key={option.value}
            value={option.value}
          >
            {option.label}
          </ItemComponent>
        ))}
      </MaterialSelect>
      <FormHelperText>
        {caption}
      </FormHelperText>
    </StyledFormControl>
  );
}

export default Select;
