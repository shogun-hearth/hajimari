import { ThemeOptions, createTheme } from '@mui/material/styles';

import colors from './tokens/colors';

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
};


export const themeOptions: ThemeOptions = {
  palette: {
    common: { ...colors },
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

