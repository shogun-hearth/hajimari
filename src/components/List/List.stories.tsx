import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import List, { ListProps } from './List';
import ListItem from '../ListItem/ListItem';

export const argTypes = {
  listItem: {
    defaultValue: <ListItem headerText='a list item' />,
    control: {
      type: 'select',
    },
    table: {
      category: 'ListItem',
    },
  },
};

export default {
  title: 'Organism/List',
  decorators: [withDesign],
  includeStories: [],
  component: List,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
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
