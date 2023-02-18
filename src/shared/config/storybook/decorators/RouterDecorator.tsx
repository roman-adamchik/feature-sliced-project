import { type Story } from '@storybook/react';
import { type ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: Story): ReactElement => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};
