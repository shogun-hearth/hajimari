import {
  ThemeOptions,
  createTheme,
  PaletteOptions,
  alpha,
  darken,
} from '@mui/material/styles';

import colors from '../tokens/colors';
import blue from '../colors/blue';
import green from '../colors/green';
import greyscale from '../colors/greyscale';
import red from '../colors/red';
import yellow from '../colors/yellow';
import purple from '../colors/purple';

import './augmentations';

const pxToRem = createTheme().typography.pxToRem;

/**
 * @TODO remove all deprecated values once izakaya has been fully updated
 */

/**
 * @DEPRECATED -- now legacy typography with variants we either no longer want
 * to use or have redefined with different attributes
 * */
export const izakayaTypographyOptions: ThemeOptions['typography'] = {
  fontFamily: "'Poppins', sans-serif, 'Lora', serif",
  fontSize: 16,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  button: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    textTransform: 'none',
  },
  h3: {
    fontSize: pxToRem(20),
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(20),
    fontWeight: 400,
  },
  h5: {
    fontSize: pxToRem(18),
    fontWeight: 500,
  },
  h6: {
    fontSize: pxToRem(18),
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    fontWeight: 500,
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: pxToRem(12),
    fontWeight: 400,
  },
  overline: {
    fontSize: pxToRem(11),
    fontWeight: 400,
  },
};

/**
 * @DEPRECATED -- custom keys added to theme options in izakaya
 * */
const izakayaCustomOptions = {
  drawerWidth: 204,
  drawerZIndex: 90,
  navbarHeight: 80,
  shape: {
    borderRadius: 1,
  },
};

/**
* @DEPRECATED -- component overrides within izakaya; merged with what is provided by hajimari
* */
export const izakayaComponentOverrides: ThemeOptions['components'] = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: 16,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
      input: {
        fontSize: 16,
      },
      inputAdornedStart: {
        paddingLeft: 8,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 16,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      standard: {
        fontSize: 16,
      },
      outlined: {
        fontSize: 16,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
        lineHeight: 1.3,
        padding: '12px 20px',
        fontWeight: 500,
        textAlign: 'center',
        borderRadius: 4,
      },
      outlined: {
        // Unset default padding set by MUI
        padding: undefined,
      },
      sizeSmall: {
        fontSize: 14,
        lineHeight: 1.3,
        padding: '6px 20px',
        fontWeight: 600,
      },
      sizeLarge: {
        fontSize: 16,
        lineHeight: 1.3,
        padding: '16px 24px',
        fontWeight: 600,
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: 16,
      },
      contained: {
        marginLeft: 8,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: 16,
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        paddingLeft: '25px',
        paddingRight: '25px',
      },
      action: {
        marginRight: 'unset',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      wrapped: {
        fontSize: 14,
        textTransform: 'uppercase',
      },
      root: {
        fontSize: 14,
        selected: {
          fontWeight: 700,
        },
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      hover: {
        cursor: 'pointer',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontSize: 14,
      },
    },
  },
  MuiIcon: {
    styleOverrides: {
      root: {
        fontSize: pxToRem(18),
      },
      fontSizeSmall: {
        fontSize: pxToRem(12),
      },
      fontSizeLarge: {
        fontSize: pxToRem(27),
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        fontSize: pxToRem(18),
      },
      fontSizeSmall: {
        fontSize: pxToRem(12),
      },
      fontSizeLarge: {
        fontSize: pxToRem(27),
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&$selected': {
          backgroundColor: colors.primary100,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        border: `1px solid ${colors.basic500}`,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 40px',
        height: '100%',
      },
    },
  },
};

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
        color: greyscale[700],
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
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const color = ownerState.color ?? 'inherit';

        return {
          ...(color === 'default' && {
            color: theme.palette.greyscale[1100],
          }),
          /**
           * If a color that is not "default" is passed in, we
           * can use the 500 shade of that color for the icon
           */
          ...(color !== 'default' && color !== 'inherit' && {
            color: theme.palette[color][500],
          }),
          /**
          * The background color of an IconButton on hover is generally
          * the lightest shade of the chosen color. Rather than trying to do
          * any "clever" code-golfing, we're being intentionally verbose so it's
          * very obvious what each color does on hover, particularly since there
          * are a few exceptions to the general shade rule of 100.
          * */
          '&:hover, &.Mui-focusVisible': {
            ...(color === 'inherit' && {
              backgroundColor: 'inherit',
            }),
            ...((color === 'blue' || color === 'default') && {
              backgroundColor: theme.palette.blue[100],
            }),
            ...(color === 'red' && {
              backgroundColor: theme.palette.red[100],
            }),
            ...(color === 'green' && {
              backgroundColor: theme.palette.green[100],
            }),
            ...(color === 'yellow' && {
              backgroundColor: theme.palette.yellow[100],
            }),
            ...(color === 'greyscale' && {
              backgroundColor: theme.palette.greyscale[300],
            }),
          },
        };
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      text: ({ ownerState, theme }) => (
        {
          // boxSizing: 'border-box',
          ...(ownerState.color != null && {
            color: theme.palette[ownerState.color][500],
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color][100],
            },
            '&:disabled': {
              color: theme.palette.greyscale[700],
            },
            /**
             * styles applied only for 'text'variant = 'text' when bg (background mode) = 'dark'
             * */
            ...(ownerState.bg === 'dark' && {
              color: theme.palette[ownerState.color][300],
              /**
               * On dark backgrounds, the hover background color for every color
               * that isn't "default" will be the 300 shade value at 10% opacity.
               * (Note the "10" as the alpha to extend the hex color)
               * 
              */
              '&:hover': {
                backgroundColor: `${theme.palette[ownerState.color][300]}10`,
              },
              '&:disabled': {
                color: theme.palette.greyscale[900],
              },
            }),
          })
        }
      ),
      disabled: ({ ownerState, theme }) => ({
        borderRadius: 8,
        padding: '12px 16px',
        alignItems: 'center',
        boxShadow: 'none',
        ...(ownerState.variant === 'primary' && {
          backgroundColor: theme.palette.greyscale[300],
          /** the text color is the same as the border */
          color: theme.palette.greyscale[700],
        }),
        ...(ownerState.variant === 'secondary' && {
          border: '1px solid',
          borderColor: theme.palette.greyscale[300],
          /** the text color is the same as the border */
          color: theme.palette.greyscale[700],
        }),
      }),
      primary: ({ ownerState, theme }) => {
        const background = ownerState.color && theme.palette[ownerState.color][500];
        return {
          /**
           * the default background color for a primary button is the 500 shade
          */
          ...(ownerState.color != null && {
            color: background && theme.palette.getContrastText(background),
            backgroundColor: background,
            /** the hover color is the 700 shade for primary buttons */
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
          backgroundColor: theme.palette[ownerState.color][500],
          color: theme.palette[ownerState.color][900],
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color][700],
          },
        }),
      }),
    }
  },
};

export const palette: PaletteOptions = {
  blue: {
    main: blue[500],
    100: blue[100],
    300: blue[300],
    500: blue[500],
    700: blue[700],
    900: blue[900],
  },
  red: {
    main: red[500],
    100: red[100],
    300: red[300],
    500: red[500],
    700: red[700],
    900: red[900],
  },
  greyscale: {
    main: greyscale[500],
    100: greyscale[100],
    300: greyscale[300],
    500: greyscale[500],
    700: greyscale[700],
    900: greyscale[900],
    1100: greyscale[1100],
  },
  green: {
    main: green[500],
    100: green[100],
    300: green[300],
    500: green[500],
    700: green[700],
    900: green[900],
  },
  yellow: {
    main: yellow[500],
    100: yellow[100],
    300: yellow[300],
    500: yellow[500],
    700: yellow[700],
    900: yellow[900],
  },
  purple: {
    main: purple[500],
    100: purple[100],
    300: purple[300],
    500: purple[500],
    700: purple[700],
    900: purple[900],
  },
  /** @DEPRECATED izakaya things -- @TODO remove once no longer in use*/
  common: { ...colors },
  warning: {
    main: yellow[500],
    /** effectively the same as the deprecated warningTransparent300 */
    light: alpha(yellow[500], 0.24),
    dark: yellow[700],
    contrastText: greyscale[100],
  },
  info: {
    main: greyscale[500],
    /** same as deprecated infoTransparent100 */
    light: alpha(greyscale[500], 0.08),
    dark: greyscale[700],
    contrastText: greyscale[1100],
  },
  error: {
    main: red[500],
    /** same as deprecated dangerTransparent100 */
    light: alpha(red[500], 0.08),
    dark: darken(red[500], 0.15),
    contrastText: greyscale[100],
  },
  success: {
    main: green[500],
    /** same as deprecated successTransparent100 */
    100: alpha(green[500], 0.08),
    /** same as deprecated successTransparent300 */
    light: alpha(green[500], 0.24),
    dark: green[700],
    contrastText: greyscale[100],
  },
  primary: {
    main: blue[500],
    /** same as deprecated primaryTransparent100 */
    100: alpha(blue[500], 0.08),
    /** same as deprecated primaryTransparent300 */
    light: alpha(blue[500], 0.24),
    dark: darken(blue[500], 0.15),
    contrastText: greyscale[100],
  },
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: "'Poppins', sans-serif, 'Lora', serif",
  fontSize: 16,
  /** @TODO (design_system): add responsive sizes for breakpoints */
  h1: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
  },
  h2: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
  },
  h1a: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
  },
  h2a: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
  },
  /**
   * fontFamily must be explicitly defined, since these are custom
   * variants without any MUI defaults
   */
  p1: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    fontFamily: "'Poppins', sans-serif",
  },
  p2: {
    fontSize: pxToRem(14),
    fontFamily: "'Poppins', sans-serif",
    lineHeight: pxToRem(20),
  },
  p3: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontFamily: "'Poppins', sans-serif",
  },
};

export const themeOptions: ThemeOptions = {
  ...izakayaCustomOptions,
  palette,
  /** putting the hajimari overrides second _should_ just merge */
  typography: {
    ...izakayaTypographyOptions,
    ...typography,
  },
  components: {
    ...izakayaComponentOverrides,
    ...componentOverrides,
  },
};

const theme = createTheme(themeOptions);

export default theme;


