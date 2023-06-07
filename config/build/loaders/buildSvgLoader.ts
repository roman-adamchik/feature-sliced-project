import { type RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
