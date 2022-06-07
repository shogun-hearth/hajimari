import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { LinkProps } from 'react-router-dom';

import Typography from '../Typography';
import styled from '../../theme/styled';
import { titleCase } from '../../utils/stringFormatters';

type HTMLAnchorProps = React.HTMLProps<HTMLAnchorElement>;

export interface ButtonProps<C> extends MuiButtonProps {
  /** 
   * 
   * This prop is only relevant for the `text` variant.
   * 
   * The background type on which this Button is appears. Since we don't
   * currently support light vs dark mode on web as a theme variant, we can
   * use this prop to determine relevant styles.
   * 
   * @default 'light'
   */
  bg?: BackgroundMode;
  /**
   * In order to use certain props that one would expect to have available on a button
   * while satisfying typescript in accordance with MUI's component 'composition'
   * rules, we have to do some forwardRef + generics shenanigans:
   * 
   * https://mui.com/material-ui/guides/composition/#with-typescript
   * https://github.com/mui/material-ui/issues/15827#issuecomment-809209533
   * 
   */
  component?: C | string;
  to?: LinkProps['to'];
  css?: any;
  noStopPropagation?: boolean;
  /**
   * It appears there are some type limitations when it comes to passing in
   * props that an HTML anchor element would accept as attributes; so for now,
   * we'll manually declare these types so that they can be accessed.
   */
  download?: HTMLAnchorProps['download'];
  target?: HTMLAnchorProps['target'];
  rel?: HTMLAnchorProps['rel'];
  /**
   * If `true`, shows the button in a "loading state" with a circular progress indicator
   * @default false
   */
  loading?: boolean;
  /**
   * Text to display in the button when `loading` is `true`.
   * @default false
   */
  loadingIndicator?: string;
};

const ButtonRoot = styled(MuiButton)(({ theme, variant }) => ({
  /** these styles apply to buttons universally */
  display: 'flex',
  borderRadius: 8,
  alignItems: 'center',
  boxShadow: 'none',
  textTransform: 'none',
  height: 48,
  justifyContent: 'center',
  textAlign: 'center',
  /**
   * We want our buttons to have padding: '12px 16px'; however, the root styles of the
   * MuiButton have padding: '6px 16px'. So we're doing some math here.
   * 
   * https://github.com/mui/material-ui/blob/1b64a416d6eccc4423eb7749dc1fe12bfed64c1d/packages/mui-material/src/Button/Button.js#L81
   * */
  padding: '6px 16px',
  minHeight: 0,
  whiteSpace: 'nowrap',
  /** 
   * By default, a button width is dynamically set to fit its content.
   * If the width is less than 148px, the button width should be set to at least 148px wide.
   */
  minWidth: 148,
  /** styles applied when disabled = true for each variant */
  '&:disabled': {
    ...(variant === 'primary' && {
      backgroundColor: theme.palette.greyscale[300],
      color: theme.palette.greyscale[700],
    }),
    ...(variant === 'secondary' && {
      border: '1px solid',
      borderColor: theme.palette.greyscale[500],
      /** the text color is the same as the border */
      color: theme.palette.greyscale[500],
    }),
    ...(variant === 'filled' && {
      backgroundColor: theme.palette.greyscale[300],
      color: theme.palette.greyscale[700],
    }),
  },
  /**
   * @TODO text buttons should be left aligned unlike the other variants;
   * however, in the interim that looks kind of funny, so we'll leave
   * the text centered for now.
   * */
  ...(variant === 'text' && {
    /** @TODO confirm that text buttons don't follow the same min width rules */
    minWidth: 'min-content',
    paddingLeft: 0,
    paddingRight: 0,
  }),
}));

const Button = React.forwardRef(<C extends React.ComponentType<any>>({
  children,
  onClick,
  noStopPropagation,
  loading = false,
  loadingIndicator,
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps<C>,
  ref?: React.ForwardedRef<HTMLButtonElement>): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!noStopPropagation) {
      event.stopPropagation();
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonRoot
      ref={ref}
      variant={variant}
      onClick={handleClick}
      disabled={disabled || loading}
      endIcon={loading ?
        <CircularProgress size={16} thickness={6} color="inherit" /> :
        undefined
      }
      {...props}
      css={undefined}
    >
      {typeof children === 'string' ?
        <Typography variant="p1" weight="medium">
          {loading ? loadingIndicator : titleCase(children)}
        </Typography> :
        children
      }
    </ButtonRoot>
  );
});

export default Button;