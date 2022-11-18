import React from 'react';
import { DataGrid as MuiDataGrid, DataGridProps } from '@mui/x-data-grid';

import theme from '../../theme';
import { makeStyles } from '../../theme';
import Box from '../Box';
import styled from '../../theme/styled';

export interface Props extends DataGridProps {
  /**
   * the number of rows dsiplayed per page
   *
   * @optional
   * @default 10
   * */
  pageSize?: number;
  /**
   * sets the height of the table. Mui seems to accept units like px and vh but not %
   *
   * @default "500px"
   * */
  height: string;
}

const DataGridRoot = styled(MuiDataGrid)(({ theme }) => ({
  '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '&.MuiDataGrid-root .MuiDataGrid-columnHeaders': {
    borderBottom: `1px solid ${theme.palette.greyscale[700]}`,
  },
}));

const Datagrid = ({
  columns,
  pageSize = 10,
  rows,
  height = '500px',
  ...otherProps
}: Props): JSX.Element => (
  <Box sx={{ height: height, width: '100%' }}>
    <DataGridRoot
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      disableColumnSelector
      disableDensitySelector
      hideFooterSelectedRowCount
      showColumnRightBorder={false}
      rowHeight={65}
      sx={{
        backgroundColor: theme.palette.greyscale[100],
        border: 'none',
      }}
      {...otherProps}
    />
  </Box>
);

export default Datagrid;
