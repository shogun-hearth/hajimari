import React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import Box from '../Box';
import Typography from '../Typography';

type SuggestedActionAccordionVariant = 'green' | 'yellow' | 'red' | 'greyscale';

export interface SuggestedActionAccordionProps extends Omit<AccordionProps, 'variant'> {
  /* sets color of left pill */
  variant: SuggestedActionAccordionVariant;
  /* title of accordion header */
  groupTitle: string;
  /* number of suggested actions in category */
  numItems: number;
}

const SuggestedActionAccordion = ({
  variant,
  groupTitle,
  numItems,
  children,
  ...otherProps
}: SuggestedActionAccordionProps): JSX.Element => {
  const setIconColor = (variant: SuggestedActionAccordionVariant): HajimariColor => {
    if (otherProps.disabled) return 'greyscale.700';
    switch(variant) {
    case 'green':
      return 'green.500';
    case 'yellow':
      return 'yellow.500';
    case 'red':
      return 'red.500';
    case 'greyscale':
      return 'greyscale.700';
    }
  };

  return (
    <Accordion
      sx={{
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'greyscale.500',
        '&.MuiAccordion-root': {
          borderRadius: 8,
        },
        '&.Mui-disabled	': {
          color: 'greyscale.700',
          backgroundColor: 'greyscale.100',
        },
      }}
      {...otherProps} 
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 24 }} />}
        sx={{ px: 2, py: 1.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            mr: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Brightness1Icon sx={{ color: setIconColor(variant), fontSize: 10, mr: 1.5 }} />
            <Typography variant="p1" weight="semibold">
              {groupTitle}
            </Typography>
          </Box>
          <Typography variant="p1">
            {numItems}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default SuggestedActionAccordion;
