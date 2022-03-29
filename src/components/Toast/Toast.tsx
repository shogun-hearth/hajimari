import { useCallback } from 'react';
import { useSnackbar, OptionsObject } from 'notistack';
import { IconButton, Theme } from '@mui/material';
import Typography from '../Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Error as ErrorIcon } from '@mui/icons-material';

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
  close: (key: string | number | undefined) => void;
  icon: React.ReactNode;
} & OptionsObject;

const snackOptions = ({
  variant,
  close,
  icon,
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
      {icon}
    </IconButton>
  ),
  autoHideDuration: 5000,
  ...otherOptions,
});

const createMessage = (message: string): React.ReactNode =>
  <Typography>{message}</Typography>;

export type UseSnackActions = {
  successSnack: (message?: string, options?: OptionsObject) => string | number | null | undefined;
  errorSnack: (message?: string, options?: OptionsObject) => string | number | null | undefined;
};

// eslint-disable-next-line import/prefer-default-export
export function useSnack(
  successMessage = 'Success!',
  errorMessage = 'An error occurred. Please try again or contact support.',
  icon: React.ReactNode = <ErrorIcon />,
): UseSnackActions {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    successSnack: useCallback(
      (message?: string, options?: OptionsObject): string | number | null | undefined =>
        enqueueSnackbar(
          createMessage(message || successMessage),
          snackOptions({
            variant: 'success',
            close: closeSnackbar,
            icon,
            ...options,
          }),
        ),
      // TODO: icon is causing rerender for some reasons
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [enqueueSnackbar, closeSnackbar, successMessage],
    ),
    errorSnack: useCallback(
      (message?: string, options?: OptionsObject): string | number | null | undefined =>
        enqueueSnackbar(
          createMessage(message || errorMessage),
          snackOptions({
            variant: 'error',
            close: closeSnackbar,
            icon,
            ...options,
          }),
        ),
      // TODO: icon is causing rerender for some reasons
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [enqueueSnackbar, closeSnackbar, errorMessage],
    ),
  };
}