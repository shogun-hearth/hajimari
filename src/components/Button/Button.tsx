import React, { useCallback } from 'react';
import {
  ButtonBase,
  Button as MaterialButton,
  CircularProgress,
} from '@mui/material';
import { ButtonProps as MaterialButtonProps } from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'classnames';

const useStyles = makeStyles({
  rounded: {
    borderRadius: 100,
  },
  noOutline: {
    outline: 'none',
  },
  noPointer: {
    cursor: 'default',
  },
});

export type ButtonProps = {
  children: React.ReactNode;
  component?: React.ReactNode;
  loading?: boolean;
  rounded?: boolean;
  disabledMessage?: string;
  noStopPropagation?: boolean;
  // href?: string;
  // target?: string;
  // rel?: string;
  // transparent?: boolean;
  // to?: LinkProps['to'];
  // buttonType?: Palette;
  // download?: string;
} & MaterialButtonProps;

const Button = React.forwardRef(({
  children,
  onClick,
  loading,
  disabled,
  rounded = false,
  disabledMessage,
  noStopPropagation = false,
  ...otherProps
}: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>): JSX.Element => {
  const styles = useStyles();
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!noStopPropagation) {
      event.stopPropagation();
    }
    if (onClick) {
      onClick(event);
    }
  }, [onClick, noStopPropagation]);

  const button = (
    <MaterialButton
      onClick={handleClick}
      color="primary" // this right?
      disabled={loading || disabled}
      className={cx(styles.noOutline, { [styles.rounded]: rounded })}
      ref={ref}
      {...otherProps}
    >
      {loading ?
        <CircularProgress size={20} /> :
        children
      }
    </MaterialButton>
  );

  return (
    <>
    {disabled && disabledMessage ?
      <ButtonBase
        disableRipple
        disableTouchRipple
        onClick={() => console.log(disabledMessage)}
        className={styles.noPointer}
      >
        {button}
      </ButtonBase> :
      button
    }
    </>
  );
});

export default Button;