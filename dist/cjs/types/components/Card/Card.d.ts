import { CardProps as MuiCardProps } from '@mui/material/Card';
export interface CardColorProperty {
    border?: Color;
    bg?: Color;
}
export interface CardProps extends MuiCardProps, CardColorProperty {
}
declare const Card: ({ border, children, bg, sx, ...props }: CardProps) => JSX.Element;
export default Card;
