import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    // When importing files of those types we do not need to write the part after dot
    extensions: ['.tsx', '.ts', '.js'],
  };
}
