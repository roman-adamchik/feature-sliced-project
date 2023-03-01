import { type FC, lazy } from 'react';

const AboutPageAsync = lazy<FC>(
  async () =>
    await new Promise((resolve) => {
      // only for testing purposes
      setTimeout(() => { resolve(import('./AboutPage')); }, 500);
    }),
);

export default AboutPageAsync;
