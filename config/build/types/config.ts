export type BuildType = 'development' | 'production';

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuildType
  port: number
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildType
  paths: BuildPaths
  isDev: boolean
  port: number
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
