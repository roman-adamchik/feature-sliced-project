import { type FC, lazy } from 'react';

export const ArticleEditPageAsync = lazy<FC>(
  async () => await import('./ArticleEditPage'),
);
