import { type BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { type WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins (options: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = options;
  const plugins = [
    // Generates html with js bundle already connected to it
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // Shows the progress bar for building process
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      GLOBAL_IS_DEV: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
