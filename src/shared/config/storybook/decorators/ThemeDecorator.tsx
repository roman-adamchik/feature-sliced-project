import { type Story } from '@storybook/react';
import { ThemeProvider, type Theme } from '@/app/providers/ThemeProvider';
import { type ReactElement } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story): ReactElement => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
