import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
