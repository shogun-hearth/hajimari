import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';
import { IconButton, Switch } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import List, { ListProps } from './List';
import ListItem from '../ListItem/ListItem';
import Button from '../Button';


export const argTypes = {
  children: {
    control: {
      type: 'select',
    },
    table: {
      category: 'ListItem',
    },
  },
};

export const variantListItems = [
  {
    headerText: 'Payment Options On Invoices',
    description: 'Show or hide payment options for all of your customers',
    isHeader: true,
    divider: true,
    childNode: <Switch color="primary" />,
  },
  {
    headerText: 'Payments Account',
    divider: true,
    childNode: <Button variant="primary" color="blue"> Edit Account </Button>,
  },
  {
    headerText: 'Automated Payment Reminders',
    childNode: <IconButton> <ExpandMoreIcon /> </IconButton>,
  }
]

export default {
  title: 'Organism/List',
  decorators: [withDesign],
  includeStories: [],
  component: List,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  // argTypes: argTypes,
  subcomponents: {
    ListItem,
  },
} as ComponentMeta<typeof List>;

const ListTemplate = ({ children }: ListProps): JSX.Element => {
  return (
    <List>
      {children}
    </List>
  );
};

export const list: Story<ListProps> = ListTemplate.bind({});
