import { lazy } from 'react';

const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Its only for testing purposes
      setTimeout(() => resolve(import('./AboutPage')), 1000);
    })
);

export default AboutPageAsync;
