import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import DialogContent, { DialogContentProps } from './DialogContentText';

export const argTypes = {
  children: {
    name: 'content',
    control: {
      type: 'text',
    },
    defaultValue: 'This is content',
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
