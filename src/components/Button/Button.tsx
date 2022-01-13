import React, { useCallback } from 'react';
import {
  ButtonBase,
  Button as MaterialButton,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import { ButtonProps as MaterialButtonProps } from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'classnames';
import { MUIStyledCommonProps } from '@mui/system';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

// const useStyles = makeStyles({
//   rounded: {
//     borderRadius: 100,
//   },
//   noOutline: {
//     outline: 'none',
//   },
//   noPointer: {
//     cursor: 'default',
//   },
// });

export type ButtonProps = {
  children: React.ReactNode;
  component?: React.ReactNode;
  loading?: boolean;
  rounded?: boolean;
  disabledMessage?: string;
  noStopPropagation?: boolean;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // disabled?: boolean;
  // href?: string;
  // target?: string;
  // rel?: string;
  // transparent?: boolean;
  // to?: LinkProps['to'];
  // buttonType?: Palette;
  // download?: string;
} & MaterialButtonProps & MUIStyledCommonProps;

const StyledInnerButton = styled(
  ({
    children,
    loading,
    disabled,
    onClick,
    noStopPropagation,
    ...otherProps
  }: ButtonProps): JSX.Element => {
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
      if (!noStopPropagation) {
        event.stopPropagation();
      }
      if (onClick) {
        onClick(event);
      }
    }, [onClick, noStopPropagation]);
    return (
      <MaterialButton
        onClick={handleClick}
        disabled={loading || disabled}
        {...otherProps}
        // TODO add ref
      >
        {loading ?
          <CircularProgress size={20} /> :
          children
        }
      </MaterialButton>
    );
  },
  {
    name: 'StyledInnerButton',
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) =>
     prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  }
)<ButtonProps>(({ theme, rounded }) => {
  console.log('theme', theme);
  return {
    borderRadius: rounded ? '100px' : 0
  };
});

const StyledButtonContainer = styled(
  ({
    children,
    disabled,
    disabledMessage,
    ...otherProps
  }: ButtonProps): JSX.Element => {
    
    const innerButton = (
      <StyledInnerButton
        disabled={disabled}
        {...otherProps}
        //TODO add ref
      >
        {children}
      </StyledInnerButton>
    );

    return (
      <>
        {disabled && disabledMessage ?
          <ButtonBase
            disableRipple
            disableTouchRipple
            onClick={() => console.log(disabledMessage)}
            // className={styles.noPointer}
          >
            {innerButton}
          </ButtonBase> :
          innerButton
        }
      </>
    );
  },
  {
    name: 'StyledButtonContainer',
  }
)<ButtonProps>(({ theme }) => ({

}));

const Button = React.forwardRef(({
  children,
  ...otherProps
}: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>): JSX.Element => 
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={(theme: Theme) => ({
      ...theme
    })}
    >
      <StyledButtonContainer {...otherProps}>
        {children}
      </StyledButtonContainer>
    </ThemeProvider>
  </StyledEngineProvider>
)

export default Button;