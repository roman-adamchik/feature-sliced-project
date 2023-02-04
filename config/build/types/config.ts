export type BuildType = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildType;
  port: number;
}

export interface BuildOptions {
  mode: BuildType;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
