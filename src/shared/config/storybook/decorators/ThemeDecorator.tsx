import { type Story } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';
import { type ReactElement } from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story): ReactElement => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
