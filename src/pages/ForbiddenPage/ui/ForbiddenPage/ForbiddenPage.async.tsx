import { type FC, lazy } from 'react';

export const ForbiddenPageAsync = lazy<FC>(
  async () => await import('./ForbiddenPage'),
);
