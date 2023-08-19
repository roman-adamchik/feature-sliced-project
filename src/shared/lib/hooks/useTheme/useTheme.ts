import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '@/shared/const/theme';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void): void => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.YELLOW;
        break;
      case Theme.YELLOW:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};
