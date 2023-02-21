import { type Story } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider';
import { type ReactElement } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story): ReactElement => {
  document.documentElement.className = theme;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className='app'>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
