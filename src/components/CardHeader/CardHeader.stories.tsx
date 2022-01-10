import { Box } from '@mui/material';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import CardHeader, { CardHeaderProps } from './CardHeader';

export const argTypes = {
  children: {
    name: 'content',
    control: {
      type: 'text',
    },
    defaultValue: 'This is a header',
  },
  bottomDivider: {
    control: { type: 'boolean' },
    defaultValue: true,
  }
};

export default {
  title: 'Atoms/Card/CardHeader',
  decorators: [withDesign],
  includeStories: ['cardHeader', 'cardHeaderTemplate'],
  component: CardHeader,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
} as Meta;

export const cardHeaderTemplate = (args: CardHeaderProps): JSX.Element => {
  return (
    <CardHeader
      // TODO(design_system): add control to dynamically change these objects somehow
      avatar={<NewReleasesOutlinedIcon />}
      action={
        <Box sx={{ mb: '-2px', ml: 2 }}>
          <MoreVertOutlinedIcon />
        </Box>
      }
      {...args}
    />
  );
}

export const cardHeader = (args: CardHeaderProps): JSX.Element => (
  <CardHeader {...args} />
);