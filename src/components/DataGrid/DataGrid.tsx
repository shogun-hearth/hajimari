import React from 'react';
import {
  DataGrid as MuiDataGrid,
  DataGridProps,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid';

import theme from '../../theme';
import { makeStyles } from '../../theme';
import Box from '../Box';

export interface Props extends DataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  pageSize?: number;
  height: string;
}

const useStyles = makeStyles({
  root: {
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
      outline: 'none',
    },
  },
});

const Datagrid = ({
  columns,
  pageSize = 10,
  rows,
  height = '500px',
  ...otherProps
}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box sx={{ height: height, width: '100%' }}>
      <MuiDataGrid
        className={classes.root}
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
