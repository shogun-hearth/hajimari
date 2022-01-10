import React from 'react';
import { Box } from '@mui/material';

import Typography from '../Typography';

export interface LineItemProps {
  /* left side element */
  leftContent: React.ReactNode;
  /* right side element */
  rightContent: React.ReactNode;
  /* total width of the LineItem; by default takes up the full width of its container */
  width?: number | string;
}

const LineItem = ({
  leftContent,
  rightContent,
  width = '100%',
}: LineItemProps): JSX.Element => (
  <Box sx={{ display: 'flex', width }}>
    <Typography variant="p1" color="basic1100">
      {leftContent}
    </Typography>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, black 10%, rgba(255,255,255,0) 0%)',
          backgroundPosition: 'center',
          backgroundSize: '10px 1px',
          backgroundRepeat: 'repeat-x',
          flex: 1,
          mx: '8px',
        }}
      />
    <Typography variant="p1" color="basic1100">
      {rightContent}
    </Typography>
  </Box>
);

export default LineItem;