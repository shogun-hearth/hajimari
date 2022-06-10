import { ArgType } from '@storybook/components';
import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '@mui/material';

import List, { ListProps } from './List';
import ListItem from '../ListItem';
import Box from '../Box';

export const argTypes = {
  border: {
    defaultValue: 'greyscale.500',
    control: 'text',
  },
  headerText: {
    defaultValue: 'Some heading',
    control: 'text',
    table: {
      category: 'ListItem',
    },
  },
  description: {
    defaultValue: 'here is a description',
    control: 'text',
    table: {
      category: 'ListItem',
    },
  },
  isHeader: {
    defaultValue: true,
    control: 'boolean',
    table: {
      category: 'ListItem',
    },
  },
  divider: {
    defaultValue: true,
    control: 'boolean',
    table: {
      category: 'ListItem',
    },
  },
  children: {
    defaultValue: <Switch />,
  },
};

export default {
  title: 'Organism/List',
  includeStories: [],
  decorators: [withDesign],
  component: List,
  subcomponents: { ListItem },
  argTypes: argTypes,
} as ComponentMeta<typeof List>;

type TemplateArgs = {
  headerText?: ArgType;
  description?: ArgType;
  divider?: ArgType;
  isHeader?: ArgType;
  children?: ArgType;
} & ListProps;

const listItemArgTypes = [
  'headerText',
  'description',
  'divider',
  'isHeader',
  'divider',
];

const ListTemplate = ({ children, ...args }: TemplateArgs): JSX.Element => {
  // pull out the args related to ListItem
  const listItemArgs = Object.entries(args).reduce((val, currArg) => {
    // if they belong to listItem, push them into that key
    if (listItemArgTypes.includes(currArg[0])) {
      return { ...val, [currArg[0]]: currArg[1] };
    }
    /*
        listItem: {
          [arg]: arg value,
          ...
        }
      */
    return val;
  }, {});
  return (
    <Box width='500px'>
      <List border='greyscale.500'>
        <ListItem {...listItemArgs}>{children}</ListItem>
      </List>
    </Box>
  );
};

export const list: Story<TemplateArgs> = ListTemplate.bind({});
