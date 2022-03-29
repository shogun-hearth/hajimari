import React from 'react';
import styled, { rootShouldForwardProp } from '@mui/material/styles/styled';
import MuiButton, {  ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { titleCase } from '../../utils/stringFormatters';
import Typography from '../Typography';

export type ButtonProps = {
  children: React.ReactNode;
} & MuiButtonProps;


const ButtonRoot = styled(MuiButton, {
  label: 'HajimariButton',
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  overridesResolver: (props: ButtonProps, styles) => {
    const { variant } = props;
    // TODO: add a check for textLight and textDark
    return [
      styles.root,
      variant && styles[variant],
      styles[`${variant}Disabled`],
    ];
  },
})(({ theme, variant }) => ({
  /** these styles apply to buttons universally */
  display: 'flex',
  flex: 1,
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
  padding: '12px 16px',
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
      backgroundColor: theme.palette.basic[300],
      color: theme.palette.basic[700],
    }),
    ...(variant === 'secondary' && {
    border: '1px solid',
    borderColor: theme.palette.basic[300],
    /** the text color is the same as the border */
    color: theme.palette.basic[700],
  })},
}));

const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element => (
  <ButtonRoot variant={variant} {...props}>
    {typeof children === 'string' ?
      <Typography variant="p1" weight="medium">
        {titleCase(children)}
      </Typography> :
      children
    }
  </ButtonRoot>
);

export default Button;