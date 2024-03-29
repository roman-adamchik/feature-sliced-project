import { buildFileLoader } from '../build/loaders/buildFileLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { type Configuration, DefinePlugin, type RuleSetRule } from 'webpack';
import { BuildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config.resolve?.extensions?.push('.tsx', '.ts');
  config.resolve?.modules?.unshift(paths.src);
  config.module?.rules?.push(BuildCssLoader(true));
  config.plugins?.push(
    new DefinePlugin({
      GLOBAL_IS_DEV: JSON.stringify(true),
      GLOBAL_API_URL: JSON.stringify('https://testapi.com'),
      GLOBAL_PROJECT: JSON.stringify('storybook'),
    }),
  );
  if (config.module?.rules) {
    config.module.rules = config.module.rules.map(
      (rule: RuleSetRule | '...') => {
        if (rule !== '...' && /.svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/ };
        }

        return rule;
      },
    );
  }

  if (config.module?.rules) {
    config.module.rules = config?.module?.rules?.filter(
      (rule: RuleSetRule | '...') => {
        return (
          rule !== '...' &&
          !(
            /.png/.test(rule.test as string) ||
            /.jpeg/.test(rule.test as string) ||
            /.jpg/.test(rule.test as string) ||
            /.jpe?g/.test(rule.test as string) ||
            /.gif/.test(rule.test as string) ||
            /.woff2/.test(rule.test as string) ||
            /.woff/.test(rule.test as string)
          )
        );
      },
    );
  }

  config?.module?.rules?.push(buildSvgLoader());
  config?.module?.rules?.push(buildFileLoader());
  config.resolve!.alias = {
    ...config.resolve?.alias,
    '@': paths.src,
  };

  return config;
};
