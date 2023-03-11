import { type BuildPaths, type BuildType, type BuildEnv } from './config/build/types/config';
import path from 'path';
import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  const mode: BuildType = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });
  return config;
};
