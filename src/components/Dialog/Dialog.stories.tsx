import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import Button from '../Button';
import Dialog, { DialogProps } from './Dialog'
import DialogContent from '../DialogContentText'
import DialogHeader from '../DialogHeader'
import DialogTopContent from '../DialogTopContent';
import DialogActions from '../DialogActions';

export const argTypes = {
  open: {
    defaultValue: true,
    control: {
        type: 'boolean',
    },
    table: {
        category: 'Dialog',
    },
  },
  maxWidth: {
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    defaultValue: "lg",
    control: {
        type: 'select',
    },
    table: {
        category: 'Dialog',
    },
  },
  fullWidth: {
    defaultValue: false,
    control: {
        type: 'boolean',
    },
    table: {
        category: 'Dialog',
    },
  },
  backlink: {
    defaultValue: 'Optional Link Back',
    control: {
      type: 'text',
    },
    table: {
      category: 'DialogTopContent',
    },
  },
  showCloseButton:{
    defaultValue: 'true',
    control: {
      type: 'boolean',
    },
    table: {
      category: 'DialogTopContent',
    },
  },
  header: {
    defaultValue: 'This is a header',
    control: {
      type: 'text',
    },
    table: {
      category: 'DialogHeader',
    },
  },
  content: {
    defaultValue: 'This is some content',
    control: {
      type: 'text',
    },
    table: {
      category: 'DialogContent',
    },
  },
  actions: {
    defaultValue: [
      <Button variant="text">Cancel</Button>,
      <Button variant="primary" color="blue">
        Delete
      </Button>,
    ],
    control: { type: "object" },
    table: {
      category: 'DialogActions',
    },
  }
}

type TemplateArgs = {
  backlink?: string;
  header?: ArgType;
  content?: ArgType;
  maxWidth?: ArgType;
  showCloseButton?: ArgType;
} & DialogProps;

export default {
  title: 'Atoms/Dialog',
  decorators: [withDesign],
  includeStories: [],
  component: Dialog,
  parameters: {
    open: true,
    maxWidth: "lg",
  },
  argTypes: argTypes,
} as unknown as ComponentMeta<typeof Dialog>;

const DialogTemplate = ({
  header,
  content,
  backlink,
  open,
  maxWidth,
  actions,
  showCloseButton,
  ...args
}: TemplateArgs): JSX.Element => {
  const dialogArgs = Object.entries(args).reduce((val, currArg) => {
    return { ...val, [currArg[0]]: currArg[1] };
  }, {});

  return (
    <Dialog open={open} maxWidth={maxWidth} {...dialogArgs}>
      <DialogTopContent
        backlink={backlink}
        showCloseButton={Boolean(showCloseButton)}
        // TODO(AoA): reconcile the types
      />
      {
        header &&
          <DialogHeader>
            {header}
          </DialogHeader>
      }
      {content &&
        <DialogContent>
          {content}
        </DialogContent>
      }
      {actions && 
        <DialogActions>
          {actions}
        </DialogActions>
      }
    </Dialog>
  );
};

export const dialog: Story<TemplateArgs> = DialogTemplate.bind({});