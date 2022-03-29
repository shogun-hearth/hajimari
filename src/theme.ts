import { ThemeOptions, createTheme } from '@mui/material/styles';
import React from 'react';

import colors from './tokens/colors';

type CustomPalette = {
  // should these be strings?
  100: React.CSSProperties['color'];
  300: React.CSSProperties['color'];
  500: React.CSSProperties['color'];
  700: React.CSSProperties['color'];
  900: React.CSSProperties['color'];
  1100?: React.CSSProperties['color'];
}

const shades = [100, 300, 500, 700, 900, 1100];

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
  }

  /** TODO: add purple as a key here? */
  type CustomPaletteOptions = {
    basic: CustomPalette;
    inherit: CustomPalette;
    greyscale: CustomPalette;
    green: CustomPalette;
    yellow: CustomPalette;
  }
  
  interface PaletteColor extends CustomPalette { }

  interface PaletteOptions extends CustomPaletteOptions { }

  interface Palette extends CustomPaletteOptions {}

  export interface ButtonVariants {
    primary: string;
    secondary: string;
    filled: string;
    text: string;
  }

  interface ButtonPropsVariantOverrides {
    primary: string;
    secondary: string;
    filled: string;
    text: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    // if we need to customize text, we can directly pass sx or wrap with a Box
    inherit: false;
  }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CommonColors extends Record<Color, string> {
  }
}

type MuiButtonClasses = {
  primary: true,
  primaryDisabled: true,
  secondary: true,
  filled: true,
  textLight: true,
  textDark: true,
}

type ButtonColor = Record<Color, true>;

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    filled: true;
    text: true;
    /**
     * primary and secondary variants are the equivalent of default
     * MuiButton variants, respectively
     * */
    contained: false;
    outlined: false;
  }

  /**
   * extend available button classes style overrides to correspond to
   * our custom variants, so we can map styles more directly
   */
  interface ButtonClasses extends MuiButtonClasses { }
  
  interface ButtonPropsColorOverrides { // extends ButtonColor {
    basic: true;
    greyscale: true;
    green: true;
    yellow: true;
    /** we don't need color overrides for the below keys */
    info: false;
    secondary: false;
    inherit: false;
  }
}


const pxToRem = createTheme().typography.pxToRem;

export const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    defaultProps: {
      fontFamily: "'Poppins', sans-serif, 'Lora', serif",
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        fontFamily: "'Poppins', sans-serif, 'Lora', serif",
        borderRadius: 4,
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        alignItems: 'center',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        color: colors.basic700,
      },
    },
  },
  MuiIcon: {
    styleOverrides: {
      root: {
        fontSize: 18,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      disabled: ({ ownerState, theme }) => ({
        borderRadius: 8,
        padding: '12px 16px',
        alignItems: 'center',
        boxShadow: 'none',
        ...(ownerState.variant === 'primary' && {
          backgroundColor: theme.palette.basic[300],
          /** the text color is the same as the border */
          color: theme.palette.basic[700],
          /** the hover color is the 100 value for secondary buttons */
        }),
        ...(ownerState.variant === 'secondary' && {
          border: '1px solid',
          borderColor: theme.palette.basic[300],
          /** the text color is the same as the border */
          color: theme.palette.basic[700],
          /** the hover color is the 100 value for secondary buttons */
        }),
      }),
      primary: ({ ownerState, theme }) => {
        const background = ownerState.color && theme.palette[ownerState.color][500];
        // console.log('uh hello?', ownerState, background, contrast);
        return {
            /**
             * the default background color for a primary button is primary.500 
             * otherwise, we expect 
            */
            ...(ownerState.color != null && {
            color: background && theme.palette.getContrastText(background),
            backgroundColor: background,
            /** the hover color is the 700 value for primary buttons */
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color][700],
            },
          }),
        };
      },
      secondary: ({ ownerState, theme }) => ({
        ...(ownerState.color != null && {
          border: '1px solid',
          borderColor: theme.palette[ownerState.color][500],
          /** the text color is the same as the border */
          color: theme.palette[ownerState.color][500],
          /** the hover color is the 100 value for secondary buttons */
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color][100],
          },
        }),
      }),
      filled: ({ ownerState, theme }) => ({
        ...(ownerState.color != null && {
          backgroundColor: theme.palette[ownerState.color][100],
          color: theme.palette[ownerState.color][500],
          /** the hover color is the 700 value for primary buttons */
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color][300],
          },
        }),
        /** greyscale has slightly different hues */
        ...(ownerState.color === 'greyscale' && {
          backgroundColor: theme.palette[ownerState.color][300],
          color: theme.palette[ownerState.color][700],
          /** the hover color is the 700 value for primary buttons */
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color][500],
          },
        }),
      }),
    }
  },
};

export const themeOptions: ThemeOptions = {
  palette: {
    common: { ...colors },
    /** adding this value so there isn't lots of null check/default logic everywhere */
    inherit: shades.reduce((a, v) => ({ ...a, [v]: 'inherit' }), {}) as CustomPalette,
    /** TODO: remove basic in lieu of greyscale */
    basic: {
      100: colors.basic100,
      300: colors.basic300,
      500: colors.basic500,
      700: colors.basic700,
      900: colors.basic900,
      1100: colors.basic1100,
    },
    greyscale: {
      100: colors.basic100,
      300: colors.basic300,
      500: colors.basic500,
      700: colors.basic700,
      900: colors.basic900,
      1100: colors.basic1100,
    },
    primary: {
      100: colors.primary100,
      300: colors.primary300,
      500: colors.primary500,
      700: colors.primary700,
      900: colors.primary900,
    },
    /** TODO: remove success in lieu of green */
    success: {
      100: colors.success100,
      300: colors.success300,
      500: colors.success500,
      700: colors.success700,
      900: colors.success900,
    },
    green: {
      100: colors.success100,
      300: colors.success300,
      500: colors.success500,
      700: colors.success700,
      900: colors.success900,
    },
    /** TODO: remove warning in lieu of yellow */
    warning: {
      100: colors.warning100,
      300: colors.warning300,
      500: colors.warning500,
      700: colors.warning700,
      900: colors.warning900,
    },
    yellow: {
      100: colors.warning100,
      300: colors.warning300,
      500: colors.warning500,
      700: colors.warning700,
      900: colors.warning900,
    },
    /** TODO: should we rename the base colors to error as well? */
    error: {
      100: colors.danger100,
      300: colors.danger300,
      500: colors.danger500,
      700: colors.danger700,
      900: colors.danger900,
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif, 'Lora', serif",
    // TODO(design_system): add responsive sizes for breakpoints
    h1: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(36),
    },
    h2: {
      fontSize: pxToRem(20),
      lineHeight: pxToRem(28),
    },
    // fontFamily must be explicitly defined, since these are custom
    // variants without any MUI defaults
    p1: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      fontFamily: "'Poppins', sans-serif",
    },
    p2: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
      fontFamily: "'Poppins', sans-serif",
    },
    p3: {
      fontSize: pxToRem(12),
      lineHeight: pxToRem(16),
      fontFamily: "'Poppins', sans-serif",
    },
  },
  components: { ...componentOverrides },
};

export default createTheme(themeOptions);

