import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
