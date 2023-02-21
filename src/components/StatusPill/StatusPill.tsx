import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

import styled, { rootShouldForwardProp } from '../../theme/styled';
import Typography from '../Typography';

export interface StatusPillProps {
	/**
 * The content of the component.
 */
	label: MuiChipProps['label'];
	/**
	 * This is one of: `info`, `primary`, `warning`, `success`, or `error`.
	 * Each value corresponds to a representative color scheme for the pill.
	 * 
	 * @default 'info'
	 */
	variant: MuiChipProps['color'];
}

const StatusPillRoot = styled(MuiChip, {
	label: 'HajimariStatusPill',
	shouldForwardProp: (prop) => rootShouldForwardProp(prop.toString()) && prop !== 'variant',
})<MuiChipProps>(({ theme, color = 'info', variant }) => ({
	borderRadius: 8,
	'.MuiChip-icon': {
		color: 'inherit',
	},
	'.MuiChip-deleteIcon': {
		color: 'inherit',
	},
	...(variant === 'outlined' && {
		...(color === 'success' && {
			color: theme.palette.green[700],
			borderColor: theme.palette.green[700],
		}),
		...(color === 'warning' && {
			color: theme.palette.yellow[900],
			borderColor: theme.palette.yellow[900],
		}),
		...(color === 'error' && {
			color: theme.palette.red[700],
			borderColor: theme.palette.red[700],
		}),
		...(color === 'primary' && {
			color: theme.palette.blue[700],
			borderColor: theme.palette.blue[700],
		}),
		...(color === 'info' && {
			color: theme.palette.greyscale[900],
			borderColor: theme.palette.greyscale[900],
		})
	}),
	...(variant === 'filled' && {
		...(color === 'success' && {
			backgroundColor: theme.palette.green[100],
			color: theme.palette.green[700],
		}),
		...(color === 'warning' && {
			backgroundColor: theme.palette.yellow[100],
			color: theme.palette.yellow[900],
		}),
		...(color === 'error' && {
			backgroundColor: theme.palette.red[100],
			color: theme.palette.red[700],
		}),
		...(color === 'primary' && {
			backgroundColor: theme.palette.blue[100],
			color: theme.palette.blue[700],
		}),
		...(color === 'info' && {
			backgroundColor: theme.palette.greyscale[300],
			color: theme.palette.greyscale[900],
		})
	}),
})
);

const StatusPill = ({ label, variant, ...otherProps }: StatusPillProps): JSX.Element => (
	<StatusPillRoot
		label={
			<Typography variant="p1" weight="medium">{label}</Typography>
		}
		color={variant}
		icon={<CircleIcon sx={{ fontSize: 12 }} />}
		variant="filled"
		{...otherProps}
	/>
);

export default StatusPill;
