import { type Story } from '@storybook/react';
import { Suspense, type ReactElement } from 'react';

export const SuspenseDecorator = (StoryComponent: Story): ReactElement => {
  return (
    <Suspense fallback={<div>...</div>}>
      <StoryComponent />
    </Suspense>
  );
};
