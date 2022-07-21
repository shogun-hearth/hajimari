import { Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './Button';
import Box from '../Box';

export const argTypes = {
  variant: {
    name: 'Variant',
    control: { type: 'select' },
    options: ['primary', 'secondary', 'filled', 'text'],
    table: {
      defaultValue: {
        summary: 'primary',
      },
      type: {
        summary:
          "'primary' | 'secondary' | 'filled' | 'text'",
      },
    },
  },
  color: {
    name: 'Color',
    control: { type: 'select' },
    options: ["blue", "greyscale", "green", "yellow", "red"],
    table: {
      defaultValue: {
        summary: 'blue',
      },
      type: {
        summary:
          "'blue' | 'green' | 'yellow' | 'red' | 'greyscale'",
      },
    },
  },
  children: {
    name: 'Content',
    control: {
      type: 'text',
    },
    table: {
      type: {
        summary: "string | React.ReactNode",
      },
    },
  },
  disabled: {
    name: 'Disabled',
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "true | false",
      },
    },
    control: {
      type: 'boolean',
    },
  },
};

export const decorators = [
  (Story: Story) => (
    <Box
      sx={{
        display: "flex",
        alignItems: 'center',
        "& > button": {
          marginRight: 2,
          "&:last-child": {
            marginRight: 0,
          },
        },
      }}
    >
      <Story />
    </Box>
  ),
];

export const parameters = {
  docs: {
    source: {
      type: "code",
      language: "tsx",
    },
  },
};

/** Story template for Sandbox */
const buttonTemplate: Story<ButtonProps<'a'>> = (args) => <Button {...args} />;

export const button = buttonTemplate.bind({});

/** default arg values that are shared across variants */
button.args = {
  disabled: false,
  color: 'blue',
  /** will be overidden below; primarily for the overview sandbox */
  children: 'Button',
  variant: 'primary',
};

export const primaryButton = buttonTemplate.bind({});

primaryButton.args = {
  ...button.args,
  children: 'Primary',
  variant: 'primary',
};

export const secondaryButton = buttonTemplate.bind({});

secondaryButton.args = {
  ...button.args,
  children: 'Secondary',
  variant: 'secondary',
};

export const filledButton = buttonTemplate.bind({});

filledButton.args = {
  ...button.args,
  children: 'Filled',
  variant: 'filled',
};

export const textButton = buttonTemplate.bind({});

textButton.args = {
  ...button.args,
  bg: 'light',
  children: 'Text',
  variant: 'text',
};
