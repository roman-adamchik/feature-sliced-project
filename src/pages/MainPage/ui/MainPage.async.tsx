import { type FC, lazy } from 'react';

export const MainPageAsync = lazy<FC>(async () => await import('./MainPage'));
