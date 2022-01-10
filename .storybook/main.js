module.exports = {
  // stories: [
  //   '../src/**/*.stories.mdx',
  //   '../src/**/*.stories.@(js|jsx|ts|tsx)'
  // ],
  stories: ['../src/**/*.stor@(y|ies).@(tsx|ts|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    'storybook-addon-designs',
    '@storybook/addon-backgrounds',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true,
    reactDocgen: 'none',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};