import { createContext } from 'react';

export enum Theme {
  DARK = 'app-theme-dark',
  LIGHT = 'app-theme-light',
}

interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
