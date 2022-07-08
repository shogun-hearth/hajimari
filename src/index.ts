import {
  Box,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  DatePickerField,
  DatePickerProps,
  Typography,
  LineItem,
  List,
  ListItem,
  InformationCard,
  ImageGridItem,
  ImageGrid,
  InlineNotification,
  Banner,
  SuggestedAction,
  SuggestedActionAccordion,
  ConfirmationModal,
} from './components';
import {
  darken,
  emphasize,
  lighten,
  hexValue,
  alpha,
} from './theme/colorManipulator';

export * from '@mui/material';

export {
  ThemeProvider,
  StyledEngineProvider,
  useTheme,
  Theme,
} from '@mui/material/styles';
export { default as makeStyles } from './theme/makeStyles';
export { default as styled } from './theme/styled';

export * from './colors';
export { default as colors } from './tokens/colors';
export { default as theme } from './theme';
export * from './theme';

export { SxProps } from '@mui/system';

/** explicitly re-exporting these values to resolve ambiguity */

/**
 * this should work with the default MUI imports above since local
 * exports take priority, so we should correctly override components
 * that we have defined
 */
export {
  Box,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  DatePickerField,
  DatePickerProps,
  Typography,
  LineItem,
  List,
  ListItem,
  InformationCard,
  ImageGridItem,
  ImageGrid,
  InlineNotification,
  Banner,
  darken,
  emphasize,
  lighten,
  hexValue,
  alpha,
  SuggestedAction,
  SuggestedActionAccordion,
  ConfirmationModal,
};
