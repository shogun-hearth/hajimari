import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '../Box';
import Typography from '../Typography';
import Button from '../Button';
import IconButton from '../IconButton';

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
  /* hide both ctas; optional */
  hideCtas?: boolean;
  /* any children components; optional */
  children?: React.ReactNode;
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
  hideCtas,
  children,
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
        padding: '8px 0 12px 0',
        bgcolor: 'greyscale.100',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          backgroundColor: setBorderColor(variant),
          py: 0.5,
          mx: 0.25,
          width: 4,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: 1.75,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {typeof description === 'string' ? (
            <Typography variant="p2">{description}</Typography>
          ) : (
            description
          )}
          <Box sx={{ mr: 3 }} />
          <IconButton
            onClick={onClickMenu}
            sx={{
              py: 0,
              px: 0.5,
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
        {dueDate && (
          <Typography variant="p3" sx={{ mt: 1 }}>
            Due on {dueDate}
          </Typography>
        )}
        {!hideCtas && (
          <Box
            sx={{
              mt: 1.5,
              display: 'flex',
              width: 'fit-content',
              flexWrap: { xs: 'wrap', sm: 'unset' },
            }}
          >
            <Button variant="text" onClick={ctaAction} align="left">
              {cta}
            </Button>
            {secondaryCta && secondaryCtaAction && (
              <Button
                variant="text"
                onClick={secondaryCtaAction}
                sx={{ ml: { xs: -2, sm: 0.5 } }}
                align="left"
              >
                {secondaryCta}
              </Button>
            )}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default SuggestedAction;
