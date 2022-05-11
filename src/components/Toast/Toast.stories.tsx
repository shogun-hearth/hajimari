import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import { withDesign } from 'storybook-addon-designs';
import { SnackbarProvider } from 'notistack';

import { useSnack } from './Toast';
import Button from '../Button';
import Typography from '../Typography';
import InformationCard, { InformationCardProps } from '../InformationCard/InformationCard';

export default {
  title: 'Molecules/Toast',
  decorators: [withDesign],
  component: Button,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: {
    // add maxWidth arg type here
    title: {
      defaultValue: 'Personal note',
      name: 'title',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Personal note' },
      },
    },
    children: {
      name: 'content',
      defaultValue: 'Thank you for the opportunity to work together! ' +
        'Take a look at what the project would entail and please ' +
        'reach out if you have any questions of concerns.',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const SnackButton = () => {
  const snack = useSnack();
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Button
        onClick={() => {
          snack.warnSnack("Alert title", {description: "Interactively monetize corporate alignments and fully tested niche markets", hideIcon: false});
        }}
      >
        <Typography>Show Toast</Typography>
      </Button>
    </Box>
  )
};

const cardTemplate: Story<InformationCardProps> = (args) => {
  return (
    <SnackbarProvider hideIconVariant>
      <SnackButton/>
    </SnackbarProvider>
)};

export const TextInformationCard = cardTemplate.bind({});


