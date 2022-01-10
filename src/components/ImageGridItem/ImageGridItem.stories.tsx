import React from 'react';
import { Meta } from '@storybook/react';

import ImageGridItem, { ImageGridItemProps } from './ImageGridItem';

export const argTypes = {
  src: {
    control: {
      type: 'text',
    },
    defaultValue: 'https://hearth.imgix.net/logos/hearth-2018.svg',
  },
  alt: {
    control: {
      type: 'text',
    },
    defaultValue: 'Hearth logo',
  },
  rows: {
    control: {
      type: 'number',
    },
    defaultValue: 2,
  }
};

export default {
  title: 'Atoms/ImageGridItem',
  includeStories: ['imageItem'],
  component: ImageGridItem,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: argTypes,
} as Meta;

const ImageItem = (args: ImageGridItemProps): JSX.Element => (
  <ImageGridItem
    sx={{ p: 3 }}
    {...args}
  />
);

export const imageItem = ImageItem.bind({});