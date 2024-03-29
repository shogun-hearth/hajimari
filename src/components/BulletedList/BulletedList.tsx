import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';

import Box from '../Box';
import Typography, { TypographyProps } from '../Typography';
import theme from '../../theme';

export type BulletedListVariant =
  | 'greyscale'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red';

export interface BulletedListProps extends Omit<TypographyProps, 'variant'> {
  /* sets color of icons */
  variant?: BulletedListVariant;
  /* each block of text */
  bulletedListItems: React.ReactNode[];
  /* icon to be displayed next to list items */
  icon: JSX.Element;
  /* font size */
  fontVariant?: TypographyProps['variant'];
}


const BulletedList = ({
  variant = 'greyscale',
  bulletedListItems,
  icon,
  fontVariant,
  ...otherProps
}: BulletedListProps): JSX.Element => {
  const isMobile = useMediaQuery((t: Theme) => t.breakpoints.down('md'));

  const iconColorMap = {
    greyscale: theme.palette.greyscale[1100],
    blue: theme.palette.blue[500],
    green: theme.palette.green[500],
    yellow: theme.palette.yellow[500],
    red: theme.palette.red[500],
  };

  return (
    <Box>
      {bulletedListItems.map((listItem, index) => {
        // typecheck
        if (!listItem) return null;

        return (
          <Box
            sx={{
              display: 'flex',
              mb: index === bulletedListItems.length - 1 ? 0 : 2
            }}
            key={listItem.toString()}
          >
            <Box sx={{ color: iconColorMap[variant], mr: 1.5 }}>
              {React.cloneElement(icon, { color: 'inherit' })}
            </Box>
            {typeof listItem === 'string' ? (
              <Typography
                variant={fontVariant || (isMobile ? 'p2' : 'p1')}
                {...otherProps}
              >
                {listItem}
              </Typography>
            ) : (
              listItem
            )}
          </Box>
        )
      })}
    </Box>
  );
};

export default BulletedList;
