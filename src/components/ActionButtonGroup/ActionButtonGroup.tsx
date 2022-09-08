import React, { useState, useMemo, isValidElement } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import Button from '../Button';
import Box from '../Box';

export type ActionButtonGroupProps = {
  /**
   * The Hajimari buttons to include in the action buttons group.
   */
  children: React.ReactElement;
}

const ActionButtonGroup = ({ children }: ActionButtonGroupProps) => {
  const [showingMore, setShowingMore] = useState(false);

  const arrayChildren = React.Children.toArray(children);
  let caretRenders = arrayChildren.length > 4;

  const updateFirstButton = (child: React.ReactNode): React.ReactNode => {
    const props = { fullWidth: true, variant: 'primary' }
    return React.cloneElement(child as React.ReactElement, props);
  }

  const updateSecondaryButtons = (child: React.ReactNode): React.ReactNode => {
    const props = { fullWidth: true, variant: 'filled' }
    return React.cloneElement(child as React.ReactElement, props);
  }

  const variantCorrected = useMemo(() => {
    return arrayChildren.map<React.ReactNode>((child, idx) => {
      if (idx === 0 && isValidElement(child)) {
        return updateFirstButton(child);
      }
      return updateSecondaryButtons(child);
    });
  }, [arrayChildren]);

  const rowData = useMemo(() => {
    // typecheck
    if (!variantCorrected || !variantCorrected.length) return [];
    if (variantCorrected.length <= 2) {
      return [[variantCorrected]];
    } else if (variantCorrected.length <= 4) {
      return [ [variantCorrected[0]], variantCorrected?.slice(1)];
    } else {
      return [ [variantCorrected[0]], variantCorrected?.slice(1, 3), variantCorrected?.slice(3, 5)];
    }
  }, [variantCorrected]);
  const topButton = useMemo(() => {
    if (arrayChildren.length !== 2) {
      return rowData[0]
    }
  }, [rowData]);
  const smallButtons = useMemo(() => {
    if (arrayChildren.length === 2) {
      return rowData[0]
    }
    return rowData.slice(1)
  }, [rowData]);

  const showRow = (rowIdx: number) => rowIdx < 1 || showingMore;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
      {topButton}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 1,
        }}
      >
        {smallButtons.map((row, rowIdx) => {
          return (
            <Box
              sx={{
                width: '100%',
                my: rowIdx > 0 ? 1 : 0,
                display: 'flex',
              }}
              key={`smallButtonsRow-${rowIdx}`}
            >
              {(showRow(rowIdx) && Array.isArray(row)) &&
                row?.map((button: React.ReactNode, buttonIdx: number) => (
                  <React.Fragment key={`action-button-${buttonIdx}`}>
                    {buttonIdx !== 0 && <Box sx={{ m: 1, width: 10 }}/>}
                    {button}
                  </React.Fragment>
                ))}
          </Box>
          )
        })}
      </Box>
      </Box>
      {arrayChildren.length > 4 && <Button
        variant='text'
        color='blue'
        endIcon={showingMore ? <ExpandLess/> : <ExpandMore />}
        onClick={() => setShowingMore(!showingMore)}
      >
        {showingMore ? 'Less Actions' : 'More Actions'}
      </Button>}
    </Box>
  )
}

export default ActionButtonGroup;
