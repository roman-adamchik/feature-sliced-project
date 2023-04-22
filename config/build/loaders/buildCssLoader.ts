import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type RuleSetRule } from 'webpack';

export const BuildCssLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});
