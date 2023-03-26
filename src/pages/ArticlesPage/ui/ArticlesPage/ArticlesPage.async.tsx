import { type FC, lazy, memo } from 'react';

const ArticlesPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./ArticlesPage')); }, 400);
    }),
);

export default memo(ArticlesPageAsync);
