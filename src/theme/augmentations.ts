import { SimplePaletteColorOptions, Theme } from '@mui/material/styles';
import React from 'react';
import '@mui/styles';
import '@emotion/core';

/**
 * @DEPRECATED
 * @TODO remove this once izakaya has been fully ported over
 * */
type IzakayaCustomTheme = {
  navbarHeight: number;
  drawerWidth: number;
  drawerZIndex: number;
}

interface CustomPaletteColor {
  100?: string;
  300?: string;
  500?: string;
  700?: string;
  900?: string;
  /** only greyscale has a 1100 shade */
  1100?: string;
}
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CommonColors extends Record<CommonColor, string> { }
}

type CustomPaletteColorOption = SimplePaletteColorOptions & CustomPaletteColor;

export interface CustomPaletteOptions {
  greyscale?: CustomPaletteColorOption;
  green: CustomPaletteColorOption;
  yellow: CustomPaletteColorOption;
  red: CustomPaletteColorOption;
  blue: CustomPaletteColorOption;
  purple: CustomPaletteColorOption;
}

interface CustomColorOptions {
  greyscale?: true;
  green?: true;
  yellow?: true;
  red?: true;
  blue?: true;
  purple?: true;
}
declare module '@mui/material/styles' {
  interface CommonColors extends Record<CommonColor, string> { }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends IzakayaCustomTheme { }

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends Partial<IzakayaCustomTheme> { }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }

  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    h1a: React.CSSProperties;
    h2a: React.CSSProperties;
  }

  // allows configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    h1a?: React.CSSProperties;
    h2a?: React.CSSProperties;
  }

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

declare module '@mui/material/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends IzakayaCustomTheme { }
  interface ThemeOptions extends Partial<IzakayaCustomTheme> { }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends CustomPaletteColor { }

  interface PaletteOptions extends CustomPaletteOptions {
  }

  interface Palette {
    greyscale: PaletteColor;
    green: PaletteColor;
    yellow: PaletteColor;
    red: PaletteColor;
    blue: PaletteColor;
    purple: PaletteColor;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    h1a: true;
    h2a: true;
    // if we need to customize text, we can directly pass sx or wrap with a Box
    inherit: false;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    secondary: false;
    inherit: false;
    default: false;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends CustomColorOptions {
    info: false;
    secondary: false;
    inherit: false;
  }

  interface IconButtonClasses {
    bgDark: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    filled: true;
  }

  /**
   * extend available button classes style overrides to correspond to
   * our custom variants, so we can map styles more directly
   */
  interface ButtonClasses {
    primary: true;
    primaryGreen: true;
    secondary: true;
    filled: true;
  }

  interface ButtonPropsColorOverrides extends CustomColorOptions {
    /**
     * we don't have color overrides for these keys (provided by MUI),
     * so we want to ensure that these are also recognized as invalid types.
     * */
    basic: false;
    info: false;
    success: false;
    secondary: false;
    inherit: false;
  }
}
