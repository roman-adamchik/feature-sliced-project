import { type Story } from '@storybook/react';
import { type ReactElement } from 'react';

export const SidebarBackgroundDecorator = (
  StoryComponent: Story,
): ReactElement => {
  return (
    <div style={{ backgroundColor: 'var(--inverted-bg-color)' }}>
      <StoryComponent />
    </div>
  );
};
