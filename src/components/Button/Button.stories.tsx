import { Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import Box from '../Box';

/** META COMPONENT PROP UTILS */

export const argTypes = {
  variant: {
    name: 'Variant',
    control: { type: 'select' },
    options: ['primary', 'secondary', 'filled', 'text'],
  },
  color: {
    name: 'Color',
    control: { type: 'select' },
    options: ['primary', 'greyscale', 'green', 'yellow', 'error'],
    table: {
      category: 'Button',
      type: {
        summary: 'Any color',
      }
    },
  },
  children: {
    name: 'Label',
    control: {
      type: 'text',
    },
  },
  disabled: {
    name: 'Disabled',
    defaultValue: false,
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

export const buttonColors: ButtonProps['color'][] = ['primary', 'greyscale', 'green', 'yellow', 'error'];

/** Story template for Sandbox */
const buttonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const button = buttonTemplate.bind({});
button.args = { children: 'Button' };

