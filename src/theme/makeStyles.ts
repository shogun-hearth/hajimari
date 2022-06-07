import { ClassNameMap, makeStyles as muiMakeStyles, Styles, WithStylesOptions } from '@mui/styles';
import theme from './theme';
import './augmentations';

type HajimariTheme = typeof theme;

const makeStyles = <
  Props extends object = {},
  ClassKey extends string = string,
  >(
    styles: Styles<HajimariTheme, Props, ClassKey>,
    options?: Omit<WithStylesOptions<HajimariTheme>, 'withTheme'>,
): (props?: any) => ClassNameMap<ClassKey> => muiMakeStyles(
  styles, { defaultTheme: theme, ...options });

export default makeStyles;