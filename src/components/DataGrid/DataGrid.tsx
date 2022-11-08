import React from 'react';
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValueGetterParams,
  GridRowsProp,
} from '@mui/x-data-grid';

import Box from '../Box';
import theme from 'theme';

export interface Props extends DataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  pageSize: number;
  height: number;
}

const Datagrid = ({
  columns,
  pageSize,
  rows,
  height,
  ...otherProps
}: Props): JSX.Element => (
  <Box sx={{ height: height, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      disableColumnSelector
      disableDensitySelector
      hideFooterSelectedRowCount
      rowHeight={65}
      sx={{
        backgroundColor: theme.palette.greyscale[100],
      }}
      {...otherProps}
    />
  </Box>
);

export default Datagrid;
