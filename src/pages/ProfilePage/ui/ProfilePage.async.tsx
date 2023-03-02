import { type FC, lazy } from 'react';

const ProfilePageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes loading imitation
      setTimeout(() => { resolve(import('./ProfilePage')); }, 500);
    }),
);

export default ProfilePageAsync;
