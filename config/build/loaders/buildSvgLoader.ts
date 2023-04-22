import { type RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
