import { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import { CardColorProperty } from '../Card/Card';
export interface CardContentProps extends MuiCardContentProps, CardColorProperty {
}
declare const CardContent: ({ children, bg, ...props }: CardContentProps) => JSX.Element;
export default CardContent;
