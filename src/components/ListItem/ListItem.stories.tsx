import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';
import { Switch, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ListItem, { ListItemProps } from './ListItem';
import Button from '../Button';
import Box from '../Box';

export const argTypes = {
  headerText: {
    defaultValue: 'This is a header',
    control : {
      type: 'text',
    }
  },
  description: {
    defaultValue: 'some optional description',
    control : {
      type: 'text',
    },
  },
  divider: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  isHeader: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  children: {
    name: 'action type',
    control: 'select',
    table: {
      type: { summary: 'ReactNode' },
    },
    options: ['Button', 'Toggle', 'Expand', 'None']
  }
};

type TemplateArgs = {
  headerText: ArgType;
  description?: ArgType;
  children?: ArgType;
  isHeader?: ArgType,
} & ListItemProps;

export default {
  title: 'Molecules/List/ListItem',
  decorators: [withDesign],
  component: ListItem,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
} as ComponentMeta<typeof ListItem>;

const ListItemTemplate = ({ children, ...args }:TemplateArgs): JSX.Element => {
  const getCta = () => {
    switch(children) {
      case('Button'):
        return <Button variant="primary" color="blue">Some Button</Button>
      case('Toggle'):
        return <Switch color="primary" />
      case('Expand'):
        return <IconButton> <ExpandMoreIcon/> </IconButton>
      default: 
        null
    }
  };

  return (
    <Box sx={{ width: '800px' }}>
      <ListItem
        {...args}
      >
        {getCta()}
      </ListItem>
    </Box>
  )
};

export const listItem: Story<TemplateArgs> = ListItemTemplate.bind({});
