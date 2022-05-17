import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Box from '../Box';
import Typography from '../Typography';
import Button from '../Button';

type SuggestedActionVariant = 'green' | 'yellow' | 'error' | 'greyscale';

export interface SuggestedActionProps {
  /* sets color of left border */
  variant: SuggestedActionVariant;
  /* copy -- react node to allow control over bold text */
  description: React.ReactNode;
  /* what happens when the menu icon is clicked */
  onClickMenu: () => void;
  /* due date */
  dueDate?: string;
  /* left cta copy */
  cta: string;
  /* left cta action */
  ctaAction: () => void;
  /* right cta copy; optional */
  secondaryCta?: string;
  /* due date; optional */
  secondaryCtaAction?: () => void;
}

const SuggestedAction = ({
  variant,
  description,
  onClickMenu,
  dueDate,
  cta,
  ctaAction,
  secondaryCta,
  secondaryCtaAction,
}: SuggestedActionProps): JSX.Element => {
  const setBorderColor = (variant: SuggestedActionVariant): Color => {
    switch(variant) {
    case 'green':
      return 'success500';
    case 'yellow':
      return 'warning500';
    case 'error':
      return 'danger500';
    case 'greyscale':
      return 'basic700';
    }
  };

  return (
    <Box
      sx={{
        padding: '8px 6px 12px 0',
        bgcolor: 'greyscale.100',
      }}
    >
      <Box
        sx={{
          pl: 2,
          borderLeft: '4px solid',
          borderLeftColor: `common.${setBorderColor(variant)}`,
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            pt: 0.5,
          }}
          >
          {typeof description === 'string' ?
            <Typography variant="p2">{description}</Typography> :
            description
          }
          <Box sx={{ mr: 3 }} />
          <IconButton onClick={onClickMenu}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        {dueDate &&
          <Box sx={{ mt: 1 }}>
            <Typography variant="p3">Due on {dueDate}</Typography>
          </Box>
        }
        <Box sx={{ mt: 2.5, display: 'inline-flex' }}>
          <Button variant="text" onClick={ctaAction}>
            {cta}
          </Button>
          {secondaryCta && secondaryCtaAction &&
            <Box sx={{ ml: 2.5  }}>
              <Button variant="text" onClick={secondaryCtaAction}>
                {secondaryCta}
              </Button>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestedAction;
