import { type FC, lazy } from 'react';

const MainPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./MainPage')); }, 500);
    }),
);

export default MainPageAsync;
