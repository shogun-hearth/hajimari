import { useCallback, useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import cloneDeep from 'lodash.clonedeep';

import TextField from '../TextField';
import Typography from '../../Typography';

export interface DatePickerProps { 
  /* the internal name of the component instance */
  name: string;
  /* text to show as the label (if any) */
  label?: string;
  /* message if there is a warning */
  helperText?: string;
  /* the additional props to be sent directly to the underlying TextField */
  textFieldProps?: Partial<MuiTextFieldProps>;
  /* an error message to display */
  error?: string,
  /* additional logic to do whenver an onChange event is triggered */
  onChangeCallback?: (date: any, keyboardInputValue?: string | undefined) => void,
  /* additional logic to do whenver an onBlur event is triggered */
  onBlurCallback?: () => void,
};

const DatePickerField = ({
    name,
    label,
    helperText,
    textFieldProps = {},
    onChangeCallback,
    onBlurCallback,
    error,
    ...otherProps
}: DatePickerProps ): JSX.Element => {
  const [value, setValue] = useState<Date | string | null>(null);

  const fieldLabel = label != null ? label : name;

  const handleChange = onChangeCallback || useCallback((val: Date | string | null) => {
    setValue(val);
  }, [setValue]);

  const formatDate = (date: string): string => {
    const dateArr = date.split('/');
    /*
      if contractor hasn't entered a year, leave date as is
      returning an empty string causes an "invalid date" error
      to be displayed and the entered text to be retained
    */
    if (dateArr.length < 3 || dateArr?.[2] === '') return '';
    let year = dateArr.pop();
    if (year && year.length < 4) {
      // prepend a 2 and then however many zeroes to make it length of 4
      year = '2' + year.padStart(3, '0');
    }
    return dateArr.join('/') + `/${year}`;
  };

  const caption = error || helperText;
  /*
    if we add inputProps to the text field, via textFieldProps, the displayed date
    does not update because the props controlling the display get overwritten --
    this makes testing date fields difficult, as data-testid is unusable
    this block ensures we don't overwrite the inputProps we want to retain
  */
  const otherTextFieldProps = cloneDeep(textFieldProps);
  if (otherTextFieldProps.inputProps) {
    delete otherTextFieldProps.inputProps;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={value}
        label={fieldLabel}
        InputAdornmentProps={{ position: 'start', sx: { ml: 1 } }}
        onChange={handleChange}
        disabled={false}
        onError={() => {}}
        renderInput={(params: MuiTextFieldProps): JSX.Element => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              ...textFieldProps?.inputProps,
            }}
            fullWidth
            hiddenLabel={false}
            error={!!error || textFieldProps?.error}
            // allow passing these functions in at the top level, rather than into textFieldProps
            onFocus={(e) => textFieldProps?.onFocus && textFieldProps.onFocus(e)}
            onBlur={(e) => {
              onBlurCallback && onBlurCallback();
              textFieldProps?.onBlur ? textFieldProps.onBlur(e) : setValue(new Date(formatDate(e.target.value)));
            }}
            helperText={caption ? <Typography variant="p3">{caption}</Typography> : undefined}
            {...otherTextFieldProps}
            mask={"date"}
            value={params.value as string}
        />
        )}
        {...otherProps}
      />
    </LocalizationProvider>
  )
};

export default DatePickerField;
