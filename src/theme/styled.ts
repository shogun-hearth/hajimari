import createStyled, { shouldForwardProp } from '@mui/system/createStyled';
import theme from './theme';

export const rootShouldForwardProp = (prop: PropertyKey) => shouldForwardProp(prop) && prop !== 'classes';

const styled = createStyled({ defaultTheme: theme, rootShouldForwardProp });

export default styled;