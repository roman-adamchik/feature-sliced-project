import { type BuildOptions } from './types/config';
import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Rules we need to setup the loader for each file type that is not native js
export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = {
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
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };
  // As we use typescript then we don't need to add babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // order of the loaders is important
  return [fileLoader, svgLoader, cssLoader, babelLoader, typescriptLoader];
}
