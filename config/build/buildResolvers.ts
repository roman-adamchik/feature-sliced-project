import { type BuildOptions } from './types/config';
import { type ResolveOptions } from 'webpack';

export function buildResolvers (options: BuildOptions): ResolveOptions {
  const {
    paths: { src },
  } = options;

  return {
    // When importing files of those types we do not need to write the part after dot
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
