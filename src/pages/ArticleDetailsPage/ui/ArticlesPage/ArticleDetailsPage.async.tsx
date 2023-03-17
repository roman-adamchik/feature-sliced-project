import { type FC, lazy, memo } from 'react';

const ArticleDetailsPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 500);
    }),
);

export default memo(ArticleDetailsPageAsync);
