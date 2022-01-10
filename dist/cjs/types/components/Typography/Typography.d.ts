import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
export declare type FontWeightVariant = 'regular' | 'medium' | 'semibold';
export declare type FontWeightValue = 400 | 500 | 600;
declare type FontWeight = {
    [w in FontWeightVariant]: FontWeightValue;
};
export declare const fontWeights: FontWeight;
export interface TypographyProps extends MuiTypographyProps {
    weight?: FontWeightVariant;
    color?: Color;
}
declare const Typography: ({ weight, color, ...props }: TypographyProps) => JSX.Element;
export default Typography;
