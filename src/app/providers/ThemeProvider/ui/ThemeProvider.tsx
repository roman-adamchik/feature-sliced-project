import { type FC, useMemo, useState, type ReactNode, useEffect } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [isThemeInit, setIsThemeInit] = useState(false);

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInit) {
      setTheme(defaultTheme);
      setIsThemeInit(true);
    }
  }, [defaultTheme, isThemeInit]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
