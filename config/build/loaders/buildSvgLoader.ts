import { type RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.svg$/,
  use: [{
    loader: '@svgr/webpack',
    options: {
      icon: true,
      svgoConfig: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            },
          },
        ],
      },
    },
  }],
});
