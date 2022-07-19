import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import DialogContent, { DialogContentProps } from './DialogContentText';
import Typography from '../Typography';

export const argTypes = {
  children: {
    control: { type: "object" },
    table: {
      type: { summary: "ReactNode" },
    },
    defaultValue: <Typography>This is content</Typography>,
  },
};

export default {
  title: 'Atoms/Dialog/DialogContent',
  decorators: [withDesign],
  includeStories: ['dialogContent', 'dialogContentTemplate'],
  component: DialogContent,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
} as Meta;

export const dialogContent = (args: DialogContentProps): JSX.Element => (
  <DialogContent {...args} />
);
