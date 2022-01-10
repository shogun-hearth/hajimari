/// <reference types="react" />
import { ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        p1: React.CSSProperties;
        p2: React.CSSProperties;
        p3: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        p1?: React.CSSProperties;
        p2?: React.CSSProperties;
        p3?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        p1: true;
        p2: true;
        p3: true;
        inherit: false;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface CommonColors extends Record<Color, string> {
    }
}
export declare const componentOverrides: ThemeOptions['components'];
export declare const themeOptions: ThemeOptions;
declare const _default: import("@mui/material/styles").Theme;
export default _default;
