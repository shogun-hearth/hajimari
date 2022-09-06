import React from 'react';

import Button from '../Button';
import { ButtonProps } from '../Button/Button';

enum Action {
  SendReminder,
  ManuallyCollect,
  CancelRequest,
  Resend,
  Refund,
}

export interface ActionButtonProps extends ButtonProps {
  label: string;
  // icon?: React.ReactNode;
  onClick?: () => void;
  // form?: React.FunctionComponent<FormProps> | null;
  // fullWidth?: boolean;
  isPrimary?: boolean;
  loading?: boolean;
  // component?: string;
  href?: string;
  // download?: string;
  // color: string; // TODO(action_buttons): figure out color type?
  'data-testid'?: string;
  // setActiveAction: () => void;
  disabled?: boolean;
  startIcon: React.ReactNode;
};

const ActionButton = ({
  label,
  startIcon = null,
  onClick,
  // form = null,
  fullWidth = false,
  isPrimary = true,
  loading = false,
  component,
  href = '',
  download = '',
  'data-testid': testId,
  // setActiveAction,
  disabled,
  color,
}: ActionButtonProps): JSX.Element => {

  return (
    <Button
      startIcon={startIcon}
      color={color}
      variant={isPrimary ? 'primary' : 'filled'}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={() => {
        // setActiveAction();
        if (onClick) {
          onClick();
        }
      }}
      loading={loading}
      component={component ?? 'button'}
      href={href ?? undefined}
      download={download ?? ''}
      data-testid={testId}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
