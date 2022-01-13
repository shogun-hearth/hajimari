import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import Button, { ButtonProps } from './Button';

import theme from '../../theme';

export const argTypes = {
  content: {
    defaultValue: 'Button content',
    control: {
      type: 'text',
    },
  },
  size: {
    value: 'medium',
    control: 'select',
    options: ['small', 'medium', 'large'],
  },
  rounded: {
    control: { type: 'boolean' },
    defaultValue: false,
  }
};

type TemplateArgs = {
  content?: ArgType;
} & ButtonProps;

export default {
  title: 'Atoms/Button',
  decorators: [withDesign],
  component: Button,
  // includeStories: [],
  // parameters: {
    // actions: { disabled: true },
    // layout: 'centered',
  // },
  argTypes: argTypes,
} as unknown as ComponentMeta<typeof Button>;

const ButtonTemplate = ({ content, ...args }: TemplateArgs): JSX.Element => {
  return (
    <Button {...args}>
      {content}
    </Button>
  )
};

export const button: Story<ButtonProps> = ButtonTemplate.bind({});
