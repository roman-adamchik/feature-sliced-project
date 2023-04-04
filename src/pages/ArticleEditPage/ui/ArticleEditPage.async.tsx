import { type FC, lazy } from 'react';

const ArticleEditPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./ArticleEditPage')); }, 500);
    }),
);

export default ArticleEditPageAsync;
