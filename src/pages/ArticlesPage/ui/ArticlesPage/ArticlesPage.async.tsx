import { type FC, lazy } from 'react';

export const ArticlesPageAsync = lazy<FC>(
  async () => await import('./ArticlesPage'),
);
