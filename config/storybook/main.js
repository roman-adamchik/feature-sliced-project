const target = 'browserslist:browserslist config, not maintained node versions';

module.exports = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-mock/register",
    'storybook-addon-themes',
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  managerWebpack(config) {
    config.target = target;
    return config;
  },
  webpackFinal(config, { configType }) {
    config.target = target;
    return config;
  }
}