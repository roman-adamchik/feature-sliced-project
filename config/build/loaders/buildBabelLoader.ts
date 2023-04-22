import { type BuildOptions } from '../types/config';
import { type RuleSetRule } from 'webpack';

export interface buildBabelLoaderProps extends BuildOptions {
  isTSX?: boolean
}

export const buildBabelLoader = (props: buildBabelLoaderProps): RuleSetRule => {
  const { isTSX, mode } = props;

  const plugins = [
    [
      'i18next-extract', // Extract translations from files
      {
        locales: ['en', 'ru'],
        keySeparator: false,
        outputPath: 'public/locales/{{locale}}/translation.json',
        keyAsDefaultValue: true,
      },
    ],
    [
      '@babel/plugin-transform-typescript', // For TS
      {
        isTSX,
      },
    ],
    '@babel/plugin-transform-runtime', // For TS
  ];

  const productionOnlyPlugins = [
    ...(isTSX
      ? [[
          './config/babel/babelRemovePropsPlugin',
          {
            props: ['data-testid'],
          },
        ]]
      : []),
  ];

  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', {
            runtime: 'automatic',
          }],
        ],
        plugins: [
          ...plugins,
          ...(mode === 'production' ? productionOnlyPlugins : []),
        ],
      },
    },
  };
};
