import { DialogActions } from "@mui/material";
import { Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Button from '../Button';

export const argTypes = {
  children: {
    defaultValue: [
      <Button variant="text">Cancel</Button>,
      <Button variant="primary" color="blue">
        Delete
      </Button>,
    ],
    control: { type: "object" },
    table: {
      type: { summary: "ReactNode" },
    },
  },
  disableSpacing: {
    defaultVale: false,
    control: { type: "boolean" },
    table: {
      type: { summary: "boolean" },
    },
  },
};

export default {
  title: "Atoms/Dialog/DialogActions",
  decorators: [withDesign],
  includeStories: ["dialogActions"],
  component: DialogActions,
  parameters: {
    actions: { disabled: true },
    layout: "centered",
  },
  argTypes: argTypes,
} as Meta;

export const dialogActions = (args: DialogContentProps): JSX.Element => (
  <DialogActions {...args} />
);
