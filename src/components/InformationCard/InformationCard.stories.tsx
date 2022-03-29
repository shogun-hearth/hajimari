import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import { withDesign } from 'storybook-addon-designs';

import InformationCard, { InformationCardProps } from './InformationCard';

export default {
  title: 'Molecules/InformationCard',
  decorators: [withDesign],
  component: InformationCard,
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

const cardTemplate: Story<InformationCardProps> = (args) => (
  <Box sx={{ maxWidth: 500 }}>
    <InformationCard {...args} />
  </Box>
);

export const TextInformationCard = cardTemplate.bind({});
