import { type FC, lazy } from 'react';

export const ProfilePageAsync = lazy<FC>(
  async () => await import('./ProfilePage'),
);
