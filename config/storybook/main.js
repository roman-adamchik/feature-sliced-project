const target = 'browserslist:browserslist config, not maintained node versions';

module.exports = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock/register"
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