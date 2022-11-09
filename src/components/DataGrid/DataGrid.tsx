import React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps,
  GridColDef,
  GridValueGetterParams,
  GridRowsProp,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { TablePagination } from '@mui/material';

import theme from '../../theme';

import SelectField from '../Field/SelectField';
import Box from '../Box';

export interface Props extends DataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  pageSize?: number;
  height: string;
}

interface ToolbarProps {
  rowLength: number;
  pageSize: number;
}

const CustomToolbar = ({ rowLength, pageSize }: ToolbarProps) => (
  <GridToolbarContainer
    sx={{
      height: '80px',
      borderTop: `1px solid ${theme.palette.greyscale[500]}`,
      borderBottom: `1px solid ${theme.palette.greyscale[500]}`,
    }}
  >
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <SelectField options={[]} />
      <Box mr={1} />
      <SelectField options={[]} />
      <Box mr={1} />
      <GridToolbarQuickFilter
        sx={{
          p: 1,
          border: `1px solid ${theme.palette.greyscale[700]}`,
          borderRadius: 8,
        }}
      />
      <TablePagination
        component='div'
        count={rowLength}
        rowsPerPage={pageSize}
        page={0}
        onPageChange={() => {}}
      />
    </Box>
  </GridToolbarContainer>
);

const Datagrid = ({
  columns,
  pageSize,
  rows,
  height = '500px',
  ...otherProps
}: Props): JSX.Element => (
  <Box sx={{ height: height, width: '100%' }}>
    <MuiDataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      disableColumnSelector
      disableDensitySelector
      hideFooterSelectedRowCount
      showColumnRightBorder={false}
      disableSelectionOnClick
      components={{ Toolbar: CustomToolbar }}
      componentsProps={{
        toolbar: {
          quickFilterProps: {
            debounceMs: 500,
          },
          rowLength: rows.length,
          pageSize: pageSize,
        },
      }}
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
