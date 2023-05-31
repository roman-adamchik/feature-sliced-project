// eslint-disable-next-line fsd-slivki/path-check-layers
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { type Story } from '@storybook/react';
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
