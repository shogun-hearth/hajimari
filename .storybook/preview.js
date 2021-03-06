import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';

import theme from '../src/theme';
import storybookTheme from './storybookTheme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  docs: {
    theme: storybookTheme,
  },
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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {Story()}
        </ThemeProvider>
      </StyledEngineProvider>
    </StylesProvider>
  )
];
