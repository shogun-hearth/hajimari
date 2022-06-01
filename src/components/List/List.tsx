import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export interface ListProps extends MuiListProps {
  /**
   * pass in list items as children
   * @default undefined
   */
  children: React.ReactNode;
}

const List = ({
  children,
}: ListProps): JSX.Element => (
  <MuiList
    sx={{
      border: 1,
      borderRadius: 8,
      borderColor: 'greyscale.500',
    }}
  >
    {children}
  </MuiList>
);

export default List;
