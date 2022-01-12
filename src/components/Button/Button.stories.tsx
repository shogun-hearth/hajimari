import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import Button, { ButtonProps } from './Button';

import theme from '../../theme';

export const argTypes = {
  border: {
    name: 'border color',
    control: { type: 'select' },
    defaultValue: 'basic500',
    options: Object.keys({ ...theme.palette.common }),
    table: {
      category: 'Card',
      type: {
        summary: 'Any color',
      }
    },
  },
  bg: {
    name: 'fill',
    value: 'basic1100',
    control: 'select',
    options: Object.keys({ ...theme.palette.common }),
    table: {
      type: {
        summary: 'a color'
      },
      category: 'Card',
    },
  },
};

// type TemplateArgs = {
//   header?: ArgType;
//   content?: ArgType;
//   bottomDivider: ArgType;
// } & CardProps;

export default {
  title: 'Atoms/Button',
  decorators: [withDesign],
  // includeStories: [],
  component: Button,
  // parameters: {
  //   actions: { disabled: true },
  //   layout: 'centered',
  // },
  // argTypes: argTypes,
} as unknown as ComponentMeta<typeof Button>;

const ButtonTemplate = ({ href }: ButtonProps): JSX.Element => {
  return (
    <Button>
      Button content
    </Button>
  )
};

export const button: Story<ButtonProps> = ButtonTemplate.bind({});
