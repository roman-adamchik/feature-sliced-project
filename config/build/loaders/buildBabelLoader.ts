export const buildBabelLoader = () => ({
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
});
