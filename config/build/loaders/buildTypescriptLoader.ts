import { type RuleSetRule } from 'webpack';

export const buildTypescriptLoader = (): RuleSetRule => ({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
});
