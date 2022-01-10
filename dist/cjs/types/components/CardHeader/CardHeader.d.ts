import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import { CardColorProperty } from '../Card/Card';
export interface CardHeaderProps extends MuiCardHeaderProps, CardColorProperty {
    bottomDivider?: boolean;
}
declare const CardHeader: ({ bottomDivider, children, bg, ...props }: CardHeaderProps) => JSX.Element;
export default CardHeader;
