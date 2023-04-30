import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import ArticleRating from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
