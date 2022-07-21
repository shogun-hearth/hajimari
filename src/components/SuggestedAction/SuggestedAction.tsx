import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Box from '../Box';
import Typography from '../Typography';
import Button from '../Button';

type SuggestedActionVariant = 'green' | 'yellow' | 'red' | 'greyscale';

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
  const setBorderColor = (variant: SuggestedActionVariant): HajimariColor => {
    switch (variant) {
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
          borderLeftColor: setBorderColor(variant),
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
          display: 'flex',
          flexDirection: 'column',
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
          <Typography variant="p3" sx={{ mt: 1 }}>Due on {dueDate}</Typography>
        }
        <Box
          sx={{
            mt: 2.5,
            display: 'flex',
            width: 'fit-content',
            flexWrap: { xs: 'wrap', sm: 'unset' },
          }}
        >
          <Button variant="text" onClick={ctaAction} align="left">
            {cta}
          </Button>
          {secondaryCta && secondaryCtaAction &&
            <Button
              variant="text"
              onClick={secondaryCtaAction}
              sx={{ ml: { xs: -2, sm: 0.5 } }}
              align="left"
            >
              {secondaryCta}
            </Button>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestedAction;
