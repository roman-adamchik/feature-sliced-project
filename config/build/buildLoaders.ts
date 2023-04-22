import { type BuildOptions } from './types/config';
import { type RuleSetRule } from 'webpack';
import { BuildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
// import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

// Rules we need to setup the loader for each file type that is not native js
export function buildLoaders (options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const cssLoader = BuildCssLoader(isDev);
  const babelLoader = buildBabelLoader({ ...options, isTSX: false });
  const TsxBabelLoader = buildBabelLoader({ ...options, isTSX: true });
  // const typescriptLoader = buildTypescriptLoader(); MOVED TO BABEL LOADER ONLY

  // order of the loaders is important
  return [fileLoader, svgLoader, cssLoader, babelLoader, TsxBabelLoader];
}
