import React from 'react';
import {
  ListItem as MuiListItem,
  Divider,
  ListItemText,
  ListItemProps as MuiListItemProps,
  Box,
} from '@mui/material';

export interface ListItemProps extends MuiListItemProps {
  /**
   * The main text of list item row
   * @default undefined
   * @optional
   */
  headerText?: React.ReactNode;
  /**
   * a sorta subheader or more text to supplement main header
   * @optional
   */
  description?: React.ReactNode;
  /**
   * primary actions are passed in as children. current use cases include button, toggle, and expand.
   * if no children is passed in, list item will display text row.
   * @optional
   */
  children?: React.ReactNode;
  /**
   * if true, headerText will be bolded
   * @optional
   * @default false
   */
  isHeader?: boolean;
}

const ListItem = ({
  headerText,
  description,
  children,
  divider = false,
  isHeader = false,
}: ListItemProps): JSX.Element => (
  <Box>
    <MuiListItem alignItems='flex-start' sx={{ my: 1 }}>
      <ListItemText
        primary={headerText}
        secondary={description || null}
        primaryTypographyProps={{
          fontWeight: isHeader ? 'medium' : 'regular',
        }}
      />
      {children}
    </MuiListItem>
    {divider && <Divider variant='middle' />}
  </Box>
);

export default ListItem;
