import {
  emphasize as systemEmphasize,
  lighten as systemLighten,
  darken as systemDarken,
  alpha as systemAlpha,
} from '@mui/system';
import { PaletteOptions, PaletteColorOptions } from '@mui/material/styles/createPalette';

import theme from './theme';

type TransformedColor = {
  hue: keyof PaletteOptions;
  shade: keyof PaletteColorOptions;
};

const __decomposeColor__ = (color: HajimariColor): TransformedColor => {
  /**
   * a color will be in the shape of shade.hue (e.g. blue.500),
   * so splitting on the period will result in an array where
   * the first and second index are the shade and hue, respectively.
   * */
  const hue = color.split('.')[0] as keyof PaletteOptions;
  const shade = color.split('.')[1] as keyof PaletteColorOptions;

  /**
   * we can then return a color value of [hue][shade] (e.g. blue[500]),
   * which allows us to index theme.palette and get the hex value
   * */
  return { hue, shade };
};

export const hexValue = (color: HajimariColor) => {
  const { hue, shade } = __decomposeColor__(color);

  return theme.palette[hue][shade];
}

export const emphasize = (color: HajimariColor, coefficient = 0.15) => {
  const { hue, shade } = __decomposeColor__(color);

  return systemEmphasize(theme.palette[hue][shade], coefficient);
};

export const lighten = (color: HajimariColor, coefficient = 0.15) => {
  const { hue, shade } = __decomposeColor__(color);

  return systemLighten(theme.palette[hue][shade], coefficient);
};

export const darken = (color: HajimariColor, coefficient = 0.15) => {
  const { hue, shade } = __decomposeColor__(color);

  return systemDarken(theme.palette[hue][shade], coefficient);
};

export const alpha = (color: HajimariColor, coefficient = 0.15) => {
  const { hue, shade } = __decomposeColor__(color);

  return systemAlpha(theme.palette[hue][shade], coefficient);
};