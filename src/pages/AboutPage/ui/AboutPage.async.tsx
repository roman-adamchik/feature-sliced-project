import { type FC, lazy } from 'react';

export const AboutPageAsync = lazy<FC>(async () => await import('./AboutPage'));
