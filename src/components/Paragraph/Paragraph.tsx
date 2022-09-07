import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';

import Box from '../Box';
import Typography, { TypographyProps } from '../Typography';
import theme from '../../theme';

export type ParagraphVariant =
  | 'greyscale'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red';

export interface ParagraphProps extends Omit<TypographyProps, 'variant'> {
  /* sets color of icons */
  variant?: ParagraphVariant;
  /* each block of text */
  bulletedList: string[];
  /* icon to be displayed next to paragraphs */
  icon: JSX.Element;
  /* font size */
  fontVariant?: TypographyProps['variant'];
}


const Paragraph = ({
  variant = 'greyscale',
  bulletedList,
  icon,
  fontVariant,
  ...otherProps
}: ParagraphProps): JSX.Element => {
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
      {bulletedList.map((listItem, index) => (
        <Box
          sx={{
            display: 'flex',
            mb: index === listItem.length - 1 ? 0 : 2
          }}
          key={listItem}
        >
          <Box sx={{ color: iconColorMap[variant], mr: 1.5 }}>
            {React.cloneElement(icon, { color: 'inherit' })}
          </Box>
          <Typography
            variant={fontVariant || (isMobile ? 'p2' : 'p1')}
            {...otherProps}
          >
            {listItem}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Paragraph;
