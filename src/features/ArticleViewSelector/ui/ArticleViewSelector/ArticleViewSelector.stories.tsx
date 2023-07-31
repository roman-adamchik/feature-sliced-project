import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleViewSelector } from './ArticleViewSelector';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
