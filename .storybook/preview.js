import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from 'emotion-theming';

import theme from '../src/theme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  argTypes: {
    color: {
      value: 'basic1100',
      control: { type: 'select' },
      options: Object.keys({ ...theme.palette.common }),
      mapping: Object.keys({ ...theme.palette.common }).reduce((mapping, colorKey) => ({
        ...mapping, [colorKey]: theme.palette.common[colorKey],
      })),
    },
  },
  backgrounds: {
    default: 'light blue',
    values: [
      {
        name: 'light blue',
        value: '#F4F6F9',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {Story()}
        </ThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  )
];
