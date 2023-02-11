import { lazy } from 'react';

const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error only for testing purposes
      setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
    }),
);

export default AboutPageAsync;
