import React from 'react';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import MuiDatePicker, { DatePickerProps as MuiDatePickerProps } from '@mui/lab/DatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '../Typography';
import { ThemeProvider } from "@mui/material//styles";
import theme from '../../theme';

export interface DatePickerProps extends MuiDatePickerProps { 
    name: string;
    label?: string;
    helperText?: string;
    textFieldProps?: Partial<TextFieldProps>;
}

const textFieldProps = {};

// const inputCallback = params => (
//     <TextField
//       {...params}
//       inputProps={{
//         ...params.inputProps,
//         // ...textFieldProps?.inputProps,
//       }}
//       fullWidth
//       hiddenLabel={false}
//     //   error={textFieldProps?.error}
//       // allow passing these functions in at the top level, rather than into textFieldProps
//       onFocus={(e) => {
//         // if (textFieldProps?.onFocus) {
//         //   textFieldProps.onFocus(e);
//         }
//       }}
//       onBlur={(e) => {
//         // setTouched(true);
//         // if (textFieldProps?.onBlur) {
//         //   textFieldProps.onBlur(e);
//         // } else {
//         //   setValue(new Date(formatDate(e.target.value)));
//         }
//       }}
//       helperText={caption ? <Typography variant="caption">{caption}</Typography> : undefined}
//     //   {
//     />
// );

const DatePicker = (props: DatePickerProps ): JSX.Element => {
    const [value, setValue] = React.useState<Date | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>

            <MuiDatePicker
                label="Helper text example"
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                value={value}
                renderInput={(params) => <TextField {...params} />}
            />
            </ThemeProvider>
        </LocalizationProvider>
    )
};
    


export default DatePicker;