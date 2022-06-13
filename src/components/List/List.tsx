import React from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';
import { experimental_sx as e_sx } from '@mui/system';

import styled from '../../theme/styled';
export interface ListProps extends MuiListProps {
  /**
   * pass in list items as children
   * @default undefined
   */
  children: React.ReactNode;
  /**
   * if a hajimari color is specified, the list will have a border
   * @default undefined
   */
  border?: HajimariColor;
}

const ListRoot = styled(MuiList, {
  name: 'ListRoot',
})<ListProps>(({ border }) =>
  e_sx({
    ...(border != null && {
      border: '1px solid',
      borderRadius: 8,
      borderColor: border,
    }),
  })
);

const List = ({ children, border }: ListProps): JSX.Element => (
  <ListRoot border={border}>{children}</ListRoot>
);

export default List;
