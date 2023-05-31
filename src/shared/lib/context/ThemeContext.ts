import { createContext } from 'react';
import { Theme } from '@/shared/const/theme';

interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});
