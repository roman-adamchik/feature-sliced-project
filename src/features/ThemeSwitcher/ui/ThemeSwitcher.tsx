import { memo, useCallback } from 'react';
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from '@/shared/assets/icons/dark.svg';
import LightIcon from '@/shared/assets/icons/light.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className = '' } = props;
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const handleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      void dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={handleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
