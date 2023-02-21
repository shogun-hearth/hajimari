import React from 'react';
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

import styled, { rootShouldForwardProp } from '../../theme/styled';

export type IconButtonProps = {
  /** 
   * The background type that this IconButton is appearing on. Since we don't
   * currently support light vs dark mode on web as a theme variant, we can
   * use this prop to determine relevant styles.
   * 
   * @default 'light'
   */
  bg?: BackgroundMode;
} & MuiIconButtonProps;

const IconButtonRoot = styled(MuiIconButton, {
  label: 'HajimariIconButton',
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
})<IconButtonProps>(({ theme, bg, color }) => ({
  padding: '12px 8px',
  borderRadius: 8,
  /** the disabled state is always the same color for a bg */
  '&:disabled': {
    ...(bg === 'light' && {
      color: theme.palette.greyscale[700],
    }),
    ...(bg === 'dark' && {
      color: theme.palette.greyscale[900],
    }),
  },
  ...(bg === 'dark' && {
    ...(color === 'default' && {
      color: theme.palette.primary[300],
    }),
    /**
     * If a color that is not "default" is passed in, we
     * can use the 300 shade of that color for the icon
     */
    ...(color && color !== 'default' && {
      color: theme.palette[color][300],
    }),
    /**
     * On dark backgrounds, the hover background color for every color
     * that isn't "default" will be the 300 shade value at 10% opacity.
     * (Note the "10" as the alpha to extend the hex color)
     * 
     */
    '&:hover, &.Mui-focusVisible': {
      ...(color === 'default' && {
        backgroundColor: `${theme.palette.primary[300]}10`
      }),
      ...(color && color !== 'default' && {
        backgroundColor: `${theme.palette[color][300]}10`,
      }),
    },
  }),
}));

const IconButton = (props: IconButtonProps): JSX.Element => (
  <IconButtonRoot {...props} />
);

export default IconButton;

