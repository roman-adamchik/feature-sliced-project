import { type FC, lazy } from 'react';

export const AdminPanelPageAsync = lazy<FC>(
  async () => await import('./AdminPanelPage'),
);
