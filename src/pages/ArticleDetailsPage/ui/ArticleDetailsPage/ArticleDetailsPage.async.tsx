import { type FC, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy<FC>(
  async () => await import('./ArticleDetailsPage'),
);
