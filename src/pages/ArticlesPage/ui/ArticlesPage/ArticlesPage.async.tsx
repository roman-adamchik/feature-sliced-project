import { type FC, lazy, memo } from 'react';

const ArticlesPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./ArticlesPage')); }, 500);
    }),
);

export default memo(ArticlesPageAsync);
