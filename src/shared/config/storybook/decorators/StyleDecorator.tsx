// eslint-disable-next-line fsd-slivki/path-check-layers
import '@/app/styles/index.scss';
import { type Story } from '@storybook/react';
import { type ReactElement } from 'react';

export const StyleDecorator = (StoryComponent: Story): ReactElement => <StoryComponent />;
