import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Lock from '@mui/icons-material/Lock';
import Phone from '@mui/icons-material/Phone';
import Search from '@mui/icons-material/Search';

export type Mask = 'money' | 'moneyWithCents' | 'ssn' | 'lastFourSsn' | 'bankNumber' | 'phone' | 'percent' | 'taxId' | 'year' | 'default' | 'search';

type MaskData = {
  normalize: (newValue: string, value?: string) => string;
  denormalize: (arg0: string) => string;
  extraProps: Partial<MuiTextFieldProps>;
}

export const maskTypes: Record<Mask, MaskData> = {
  money: {
    normalize: (text: string) => text.replace(/[^0-9]+/g, ''),
    denormalize: (value: string | number) => parseInt(value.toString(), 10)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    extraProps: {
      InputProps: { startAdornment: <AttachMoney fontSize="inherit" /> },
    },
  },
  moneyWithCents: {
    normalize: (text: string) => parseInt(text.replace(/[^0-9]/g, '') || '0', 10).toString(),
    denormalize: (value: string | number) => {
      const dollars = (value.toString().slice(0, -2) || '0').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      const cents = value.toString().slice(-2).padStart(2, '0');
      return `${dollars}.${cents}`;
    },
    extraProps: {
      InputProps: { startAdornment: <AttachMoney fontSize="inherit" /> },
    },
  },
  ssn: {
    normalize: (text: string, previousValue = '') => {
      const number = text.replace(/[^0-9●]+/g, '');
      // depending on the number in text, we either add the last digit from text or remove last
      // digit
      return (number.length > previousValue.length) ?
        (previousValue + number[number.length - 1]).substring(0, 9) :
        previousValue.slice(0, -1);
    },
    denormalize: (rawValue: string) => {
      // at most we want to take out first 5 digits or everything except the last digit
      const hiddenLength = Math.min(rawValue.length - 1, 5);

      // replace hidden part with dots
      const value = rawValue.substring(hiddenLength, 9).padStart(rawValue.length, '●');
      const parts = [value.substring(0, 3), value.substring(3, 5), value.substring(5, 9)];
      return `${parts[0]}${parts[1] && ` — ${parts[1]}`}${parts[2] && ` — ${parts[2]}`}`;
    },
    extraProps: {
      InputProps: { endAdornment: <Lock /> },
      inputProps: { maxLength: 15, className: 'fs-exclude' },
    },
  },
  lastFourSsn: {
    normalize: (text: string) => text.replace(/[^0-9]+/g, ''),
    denormalize: (value: string) => value,
    extraProps: {
      placeholder: '0000',
      InputProps: { endAdornment: <Lock /> },
      autoComplete: 'off',
      inputProps: { maxLength: 4, className: 'fs-exclude' },
    },
  },
  bankNumber: {
    normalize: (text: string) => text.replace(/[^0-9]+/g, ''),
    denormalize: (value: string) => value,
    extraProps: {
      type: 'tel',
    },
  },
  phone: {
    // value is in this format XXX-XXX-XXXX
    normalize: (text: string) => {
      const strippedText = text.replace(/[^0-9]+/g, '');
      return `${strippedText.substring(0, 3)}-${strippedText.substring(3, 6)}-${strippedText.substring(6, 10)}`;
    },
    denormalize: (rawValue: string) => {
      const value = rawValue.replace(/[^0-9]+/g, '');
      const parts = [value.substring(0, 3), value.substring(3, 6), value.substring(6, 10)];
      return `${parts[0] && `(${parts[0]}`}${parts[1] && `) ${parts[1]}`}${parts[2] && `-${parts[2]}`}`;
    },
    extraProps: {
      InputProps: {
        startAdornment: <Phone />,
      },
      placeholder: '(555) 555-5555',
      inputProps: { type: 'tel', maxLength: 14, className: 'fs-exclude' },
    },
  },
  percent: {
    normalize: (text: string) => text,
    denormalize: (text: string) => text,
    extraProps: {
      InputProps: { endAdornment: '%' },
      inputProps: { className: 'fs-exclude' },
    },
  },
  default: {
    normalize: (text: string) => text,
    denormalize: (text: string) => text,
    extraProps: {},
  },
  taxId: {
    normalize: (text: string) => text.replace(/[^0-9]+/g, ''),
    denormalize: (rawValue: string) => {
      const value = rawValue.replace(/[^0-9]+/g, '');
      const parts = [value.substring(0, 2), value.substring(2, 9)];
      return `${parts[0]}${parts[1] && `-${parts[1]}`}`;
    },
    extraProps: {
      placeholder: 'XX-XXXXXXX',
      inputProps: {
        maxLength: 10,
        className: 'fs-exclude',
      },
    },
  },
  year: {
    normalize: (text: string) => text.replace(/[^0-9]/g, ''),
    denormalize: (value: string) => value,
    extraProps: { inputProps: { maxLength: 4 } },
  },
  search: {
    normalize: (text: string) => text,
    denormalize: (text: string) => text,
    extraProps: {
      InputProps: { startAdornment: <Search /> },
    },
  },
};
