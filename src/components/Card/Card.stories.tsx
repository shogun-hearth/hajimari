import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import Card, { CardProps } from './Card';
import CardHeader from '../CardHeader';
import CardContent from '../CardContent';

import theme from '../../theme';

const colors = ['blue', 'red', 'greyscale', 'green', 'yellow'];
const init: string[] = [];
const colorOptions = Object.entries({ ...theme.palette }).reduce(
  (val, currColor) => {
    if (colors.includes(currColor[0])) {
      Object.keys(currColor[1]).forEach((subValue) => {
        if (subValue !== 'main') {
          init.push(`${currColor[0]}.${subValue}`);
          return;
        }
      });
    }
    return val;
  },
  init
);

export const argTypes = {
  borderColor: {
    name: 'border color',
    control: { type: 'select' },
    defaultValue: 'greyscale.500',
    options: colorOptions,
    table: {
      category: 'Card',
      type: {
        summary: 'Any hajimari color',
      },
    },
  },
  bg: {
    name: 'fill',
    value: 'basic1100',
    control: 'select',
    options: Object.keys({ ...theme.palette.common }),
    table: {
      type: {
        summary: 'a color',
      },
      category: 'Card',
    },
  },
  bottomDivider: {
    control: { type: 'boolean' },
    defaultValue: true,
    table: {
      category: 'CardHeader',
    },
  },
  header: {
    defaultValue: 'This is a header',
    control: {
      type: 'text',
    },
    table: {
      category: 'CardHeader',
    },
  },
  content: {
    defaultValue: 'This is some content',
    control: {
      type: 'text',
    },
    table: {
      category: 'CardContent',
    },
  },
};

type TemplateArgs = {
  header?: ArgType;
  content?: ArgType;
  bottomDivider: ArgType;
} & CardProps;

export default {
  title: 'Atoms/Card',
  decorators: [withDesign],
  includeStories: [],
  component: Card,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
  subcomponents: {
    CardHeader,
    CardContent,
  },
} as unknown as ComponentMeta<typeof Card>;

const headerArgTypes = ['bottomDivider'];

const CardTemplate = ({
  header,
  content,
  ...args
}: TemplateArgs): JSX.Element => {
  // pull out the args related to CardHeader
  const headerArgs = Object.entries(args).reduce((val, currArg) => {
    // if they belong to CardHeader, push them into that key
    if (headerArgTypes.includes(currArg[0])) {
      return { ...val, [currArg[0]]: currArg[1] };
    }

    /*
      header: {
        [arg]: arg value,
        ...
      },
      card: {
        [arg]: arg value
      }
    */
    return val;
  }, {});

  const cardArgs = Object.entries(args).reduce((val, currArg) => {
    if (headerArgTypes.includes(currArg[0])) {
      return val;
    }

    return { ...val, [currArg[0]]: currArg[1] };
  }, {});

  return (
    <Card {...cardArgs}>
      {header && <CardHeader {...headerArgs}>{header}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
    </Card>
  );
};

export const card: Story<TemplateArgs> = CardTemplate.bind({});
