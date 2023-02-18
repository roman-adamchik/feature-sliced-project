export const buildFileLoader = () => ({
  test: /\.(png|jpe?g|gif|woff2|woff)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
});
