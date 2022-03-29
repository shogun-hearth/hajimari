import dedent from "ts-dedent";
import AddIcon from "@mui/icons-material/Add";
import { Parameters } from "@storybook/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

export const getColorSource = (color: string) => ({
  source: {
    code: dedent`
      /** ${color} button */
      <Button variant="secondary" color="${color}">
        ${color}
      </Button>`,
    language: "tsx",
  },
});

/**
 * rather than copy-pasta of argument groups that will be repeatedly grouped,
 * we can define them in one place to use with object
 * */

/** Each button variant can have each of the following (optional) icon placements */
export const iconPlacementProps = (variant: string) => ({
  start: {
    args: {
      startIcon: <AddIcon />,
      children: 'Start Icon',
    },
    parameters: {
      docs: {
        source: {
          code: dedent`
          /** button with ONLY start icon */
          <Button variant="${variant}" startIcon={<AddIcon />}>
            Start Icon
          </Button>`,
          language: "tsx",
        },
      }
    }
  },
  end: {
    args: {
      endIcon: <ArrowForwardIcon />,
      children: 'End Icon',
    },
    parameters: {
      docs: {
        source: {
          code: dedent`
          /** button with ONLY end icon */
          <Button variant="${variant}" endIcon={<ArrowForwardIcon />}>
            End Icon
          </Button>`,
          language: "tsx",
        },
      }
    }
  },
  double: {
    args: {
      startIcon: <AccountCircleOutlinedIcon />,
      endIcon: <ArrowDropDownIcon />,
      children: 'Double Icons',
    },
    parameters: {
      docs: {
        source: {
          code: dedent`
          /** button with start AND end icon */
          <Button
            variant="${variant}"
            startIcon={<AccountCircleOutlinedIcon />}
            endIcon={<ArrowDropDownIcon />}
          >
            Double Icons
          </Button>`,
          language: "tsx",
        },
      }
    }
  },
});


/** META COMPONENT PROP UTILS */

export const argTypes = {
  variant: {
    name: 'Variant',
    control: { type: 'select' },
    options: ['primary', 'secondary', 'filled', 'text'],
  },
  color: {
    name: 'Color',
    control: { type: 'select' },
    options: ['primary', 'greyscale', 'green', 'yellow', 'error'],
    table: {
      category: 'Button',
      type: {
        summary: 'Any color',
      }
    },
  },
  children: {
    name: 'Label',
    control: {
      type: 'text',
    },
  },
  disabled: {
    name: 'Disabled',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};