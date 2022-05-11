import { ReactNode, useCallback } from 'react';
import { useSnackbar, OptionsObject } from 'notistack';
import { Alert, AlertTitle, Box, IconButton, Theme } from '@mui/material';
import Typography from '../Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Error as ErrorIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

// const useStyles = makeStyles((theme: Theme) => ({
//   success: {
//     fontSize: 16,
//     color: theme.palette.success[500],
//   },
//   error: {
//     fontSize: 16,
//     color: theme.palette.error[500],
//   },
// }));

type Options = {
  description?: string,
  hideIcon?: boolean,
  close: (key: string | number | undefined) => void;
} & OptionsObject;

type SnackOptions = {
  description?: string,
  hideIcon?: boolean,
} & OptionsObject;

const snackOptions = ({
  variant,
  close,
  ...otherOptions
}: Options): OptionsObject => ({
  variant,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  action: (key: any) => (
    <IconButton
      key="close"
      aria-label="Close"
      color="inherit"
      onClick={() => close(key)}
      size="large"
    >
      <CloseIcon />
    </IconButton>
  ),
  autoHideDuration: 5000,
  ...otherOptions,
});

const createMessage = (title: string, message?: string, icon?: ReactNode): React.ReactNode => {
  return (
    <Alert variant='filled' icon={icon ? icon : false}>
      <AlertTitle><Typography variant="p1" weight="semibold">{title}</Typography></AlertTitle>
      {!!message &&
        <Typography variant="p3" weight="regular">{message}</Typography>
      }
    </Alert>
  )
};

export type UseSnackActions = {
  successSnack: (message?: string, options?: SnackOptions) => string | number | null | undefined;
  errorSnack: (message?: string, options?: SnackOptions) => string | number | null | undefined;
  infoSnack: (message?: string, options?: SnackOptions) => string | number | null | undefined;
  warnSnack: (message?: string, options?: SnackOptions) => string | number | null | undefined;
};

// eslint-disable-next-line import/prefer-default-export
export function useSnack(
  successMessage = 'Success!',
  errorMessage = 'An error occurred. Please try again or contact support.',
): UseSnackActions {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    successSnack: useCallback(
      (message?: string, options?: SnackOptions): string | number | null | undefined => {
        const icon = options?.hideIcon ? null : <CheckCircleOutlinedIcon />;
        return enqueueSnackbar(
          createMessage(message || errorMessage, options?.description, icon),
          snackOptions({
            variant: 'success',
            close: closeSnackbar,
            ...options,
          }),
        )
      },
      [enqueueSnackbar, closeSnackbar, successMessage],
    ),
    errorSnack: useCallback(
      (message?: string, options?: SnackOptions): string | number | null | undefined => {
        const icon = options?.hideIcon ? null : <InfoOutlinedIcon />;
        return enqueueSnackbar(
          createMessage(message || errorMessage, options?.description, icon),
          snackOptions({
            variant: 'error',
            close: closeSnackbar,
            ...options,
          }),
        )
      },
      [enqueueSnackbar, closeSnackbar, errorMessage],
    ),
    infoSnack: useCallback(
      (message?: string, options?: SnackOptions): string | number | null | undefined => {
        const icon = options?.hideIcon ? null : <InfoOutlinedIcon />;
        return enqueueSnackbar(
          createMessage(message || errorMessage, options?.description, icon),
          snackOptions({
            variant: 'info',
            close: closeSnackbar,
            ...options,
          }),
        )
      },
      [enqueueSnackbar, closeSnackbar, errorMessage],
    ),
    warnSnack: useCallback(
      (message?: string, options?: SnackOptions): string | number | null | undefined => {
        const icon = options?.hideIcon ? null : <InfoOutlinedIcon />;
        return enqueueSnackbar(
          createMessage(message || errorMessage, options?.description, icon),
          snackOptions({
            variant: 'warning',
            close: closeSnackbar,
            ...options,
          }),
        )
      },
      [enqueueSnackbar, closeSnackbar, errorMessage],
    ),
  };
}