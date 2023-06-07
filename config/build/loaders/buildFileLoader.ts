import { type RuleSetRule } from 'webpack';

export const buildFileLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.(png|jpe?g|gif|woff2|woff)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
});
