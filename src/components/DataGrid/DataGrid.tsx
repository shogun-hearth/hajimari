import React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridSortModel,
} from '@mui/x-data-grid';

import theme from '../../theme';
import Box from '../Box';
import styled from '../../theme/styled';
import SelectField, {
  SelectFieldOptions,
} from '../Field/SelectField/SelectField';

export interface DataGridProps extends MuiDataGridProps {
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
  /**
   * determines if the toolbar add-on will be displayed
   *
   * @default false
   * */
  toolbar?: boolean;
  /**
   * modeled after SelectField's options prop, this prop provides the listed options shown in the Sort By field
   *
   * */
  sortOptions?: SelectFieldOptions[];
  /**
   * callback that runs when user selects a Sort By option
   *
   * */
  handleSort?: (event: any) => void;
  /**
   * sortModel stores the state of the sorted data model
   *
   * */
  sortModel?: GridSortModel;
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
  '&.MuiDataGrid-root .MuiDataGrid-row:hover': {
    cursor: 'pointer',
    backgroundColor: theme.palette.blue[100],
  },
}));

interface ToolbarProps {
  sortOptions: SelectFieldOptions[];
  onChange: () => void;
}

const CustomToolbar = ({ sortOptions, onChange }: ToolbarProps) => (
  <GridToolbarContainer
    sx={{
      height: '80px',
      borderTop: `1px solid ${theme.palette.greyscale[500]}`,
      borderBottom: `1px solid ${theme.palette.greyscale[500]}`,
    }}
  >
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      {sortOptions && (
        <>
          <SelectField
            label='Sort by:'
            options={sortOptions}
            onChange={onChange}
            sx={{ width: '200px' }}
          />
          <Box mr={1} />
        </>
      )}
      <GridToolbarQuickFilter
        sx={{
          p: 1,
          border: `1px solid ${theme.palette.greyscale[700]}`,
          borderRadius: 8,
        }}
      />
    </Box>
  </GridToolbarContainer>
);

const Datagrid = ({
  columns,
  pageSize = 10,
  rows,
  height = '500px',
  toolbar = false,
  sortOptions,
  sortModel,
  handleSort,
  ...otherProps
}: DataGridProps): JSX.Element => {
  if (toolbar)
    return (
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
          sortModel={sortModel}
          components={{ Toolbar: CustomToolbar }}
          componentsProps={{
            toolbar: {
              quickFilterProps: {
                debounceMs: 500,
              },
              sortOptions: sortOptions,
              onChange: handleSort,
            },
          }}
          {...otherProps}
        />
      </Box>
    );
  return (
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
};

export default Datagrid;
