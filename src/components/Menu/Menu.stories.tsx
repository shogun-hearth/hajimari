import React, { useState, useRef } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ArgType } from '@storybook/components';

import Button from '../Button';
import Menu, { MenuProps } from './Menu';
import MenuTopContent from '../MenuTopContent/MenuTopContent';

export const argTypes = {
  children: {
    defaultValue: <Button />,
  },
  anchorEl: {
    defaultValue: undefined,
  },
  open: {
    defaultValue: false,
  },
};

type TemplateArgs = {
  open: boolean;
  anchorEl: ArgType;
  children: ArgType;
} & MenuProps;

export default {
  title: 'Molecules/Menu',
  includeStories: [],
  decorators: [withDesign],
  component: Menu,
  argTypes: argTypes,
} as ComponentMeta<typeof Menu>;

const MenuTemplate = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const ref = useRef();
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        onClick={() => setAnchorEl(ref.current)}
        ref={ref}
        sx={{ margin: 'auto' }}
      >
        Open Menu
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ '& .MuiPaper-root': { width: '390px' } }}
      >
        <MenuTopContent
          title='More Actions'
          onClose={() => setAnchorEl(null)}
        />
        <Button variant='filled' onClick={() => setAnchorEl(null)}>
          Click Me
        </Button>
        <Button variant='filled' onClick={() => setAnchorEl(null)}>
          Or Me
        </Button>
        <Button variant='filled' onClick={() => setAnchorEl(null)}>
          Or Me
        </Button>
      </Menu>
    </>
  );
};

export const menu: Story<TemplateArgs> = MenuTemplate.bind({});
