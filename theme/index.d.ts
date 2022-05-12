import { SimplePaletteColorOptions, ThemeOptions, PaletteOptions } from '@mui/material/styles';
export { StyledEngineProvider, Theme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as _mui_system from '@mui/system';
export { SxProps, SystemProps, experimental_sx as sx } from '@mui/system';
import * as _mui_material_styles_createTheme from '@mui/material/styles/createTheme';
import React from 'react';

declare const styled: _mui_system.CreateMUIStyled<_mui_material_styles_createTheme.Theme>;

/**
 * @DEPRECATED
 * @TODO remove this once izakaya has been fully ported over
 * */
declare type IzakayaCustomTheme = {
    navbarHeight: number;
    drawerWidth: number;
    drawerZIndex: number;
};
interface CustomPaletteColor {
    100?: string;
    300?: string;
    500?: string;
    700?: string;
    900?: string;
    /** only greyscale has a 1100 shade */
    1100?: string;
}
declare type CustomPaletteColorOption = SimplePaletteColorOptions & CustomPaletteColor;
interface CustomPaletteOptions {
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
declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends IzakayaCustomTheme {
    }
}
declare module '@mui/material/styles' {
    interface CommonColors extends Record<CommonColor, string> {
    }
    interface Theme extends IzakayaCustomTheme {
    }
    interface ThemeOptions extends Partial<IzakayaCustomTheme> {
    }
    interface TypographyVariants {
        p1: React.CSSProperties;
        p2: React.CSSProperties;
        p3: React.CSSProperties;
        h1a: React.CSSProperties;
        h2a: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        p1?: React.CSSProperties;
        p2?: React.CSSProperties;
        p3?: React.CSSProperties;
        h1a?: React.CSSProperties;
        h2a?: React.CSSProperties;
    }
    interface ButtonVariants {
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
    interface Theme extends IzakayaCustomTheme {
    }
    interface ThemeOptions extends Partial<IzakayaCustomTheme> {
    }
}
declare module '@mui/material/styles/createPalette' {
    interface CommonColors extends Record<CommonColor, string> {
    }
}
declare module '@mui/material/styles/createPalette' {
    interface PaletteColor extends CustomPaletteColor {
    }
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
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        p1: true;
        p2: true;
        p3: true;
        h1a: true;
        h2a: true;
        inherit: false;
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

/**
 * @TODO remove all deprecated values once izakaya has been fully updated
 */
/**
 * @DEPRECATED -- now legacy typography with variants we either no longer want
 * to use or have redefined with different attributes
 * */
declare const izakayaTypographyOptions: ThemeOptions['typography'];
/**
* @DEPRECATED -- component overrides within izakaya; merged with what is provided by hajimari
* */
declare const izakayaComponentOverrides: ThemeOptions['components'];
declare const componentOverrides: ThemeOptions['components'];
declare const palette: PaletteOptions;
declare const typography: ThemeOptions['typography'];
declare const themeOptions: ThemeOptions;
declare const theme: _mui_material_styles_createTheme.Theme;

export { componentOverrides, theme as default, izakayaComponentOverrides, izakayaTypographyOptions, palette, styled, themeOptions, typography };
