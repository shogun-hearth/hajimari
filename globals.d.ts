declare type BackgroundMode = 'light' | 'dark';

declare type Shade = 100 | 300 | 500 | 700 | 900;

declare type Hue =
  'greyscale' |
  'blue' |
  'green' |
  'yellow' |
  'red' |
  'basic' |
  'primary' |
  'success' |
  'warning' |
  'danger';

declare const hajimariColors = [
  'blue.100',
  'blue.300',
  'blue.500',
  'blue.700',
  'blue.900',
  'green.100',
  'green.300',
  'green.500',
  'green.700',
  'green.900',
  'yellow.100',
  'yellow.300',
  'yellow.500',
  'yellow.700',
  'yellow.900',
  'red.100',
  'red.300',
  'red.500',
  'red.700',
  'red.900',
  'purple.100',
  'purple.300',
  'purple.500',
  'purple.700',
  'purple.900',
  'greyscale.100',
  'greyscale.300',
  'greyscale.500',
  'greyscale.700',
  'greyscale.900',
  'greyscale.1100',
] as const;

declare type HajimariColor = typeof hajimariColors[number];

declare type CommonColor =
  'inherit' |
  'transparent' |
  'basic100' |
  'basic300' |
  'basic500' |
  'basic700' |
  'basic900' |
  'basic1100' |
  'primary100' |
  'primary300' |
  'primary500' |
  'primary700' |
  'primary900' |
  'success100' |
  'success300' |
  'success500' |
  'success700' |
  'success900' |
  'warning100' |
  'warning300' |
  'warning500' |
  'warning700' |
  'warning900' |
  'danger100' |
  'danger300' |
  'danger500' |
  'danger700' |
  'danger900' |
  'purple100' |
  'purple300' |
  'purple500' |
  'purple700' |
  'purple900';
