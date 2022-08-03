import React, { useState, useRef } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import Box from '../Box';
import Typography from '../Typography';
import Button from '../Button';
import IconButton from '../IconButton';
import SuggestedActionHamburgerMenu from '../SuggestedActionHamburgerMenu/SuggestedActionHamburgerMenu';
import MenuTopContent from '../MenuTopContent';

type SuggestedActionVariant = 'green' | 'yellow' | 'red' | 'greyscale';

export interface SuggestedActionProps {
  /* sets color of left border */
  variant: SuggestedActionVariant;
  /* copy -- react node to allow control over bold text */
  description: React.ReactNode;
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
  /* these next three props are actions for the hamburger menu, all the arguments are specified in izakaya */
  /* dismisses the suggestedaction */
  dismissAction: () => void;
  /* lets the contractor view the workflow details */
  viewWorkflow: () => void;
  /* disables all suggested actions of the specified type */
  disableAction: () => void;
}

const SuggestedAction = ({
  variant,
  description,
  dueDate,
  cta,
  ctaAction,
  secondaryCta,
  secondaryCtaAction,
  hideCtas,
  children,
  dismissAction,
  viewWorkflow,
  disableAction,
}: SuggestedActionProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
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
    <>
      <SuggestedActionHamburgerMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuTopContent
          title='More Actions'
          onClose={() => setAnchorEl(null)}
        />
        <Button
          variant='filled'
          startIcon={<OpenInBrowserIcon />}
          onClick={() => {
            viewWorkflow();
            setAnchorEl(null);
          }}
        >
          View Details
        </Button>
        <Button
          variant='filled'
          startIcon={<HighlightOffIcon />}
          onClick={() => {
            dismissAction();
            setAnchorEl(null);
          }}
        >
          Dismiss
        </Button>
        <Button
          variant='filled'
          startIcon={<NotificationsOffIcon />}
          onClick={() => {
            disableAction();
            setAnchorEl(null);
          }}
        >
          Don't Show This Again
        </Button>
      </SuggestedActionHamburgerMenu>
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
            ml: 0.375,
            width: 4,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pl: 1.875,
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
              <Typography variant='p2'>{description}</Typography>
            ) : (
              description
            )}
            <Box sx={{ mr: 3 }} />
            <IconButton
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
              sx={{
                py: 0,
                px: 0.5,
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
          {dueDate && (
            <Typography variant='p3' sx={{ mt: 1 }}>
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
              <Button variant='text' onClick={ctaAction} align='left'>
                {cta}
              </Button>
              {secondaryCta && secondaryCtaAction && (
                <Button
                  variant='text'
                  onClick={secondaryCtaAction}
                  sx={{ ml: { xs: -2, sm: 0.5 } }}
                  align='left'
                >
                  {secondaryCta}
                </Button>
              )}
            </Box>
          )}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default SuggestedAction;
