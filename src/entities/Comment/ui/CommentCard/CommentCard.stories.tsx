import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { CommentCard } from './CommentCard';
import avatar from 'shared/assets/tests/avatar.jpg';

export default {
  title: 'entities/comment/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      articleId: '1',
      id: '1',
      text: 'Cool article',
      user: {
        id: '1',
        username: 'John Bonjovi',
        avatar,
      },
    },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args}/>;

export const Light = Template.bind({});
export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkIsLoading.args = {
  isLoading: true,
};
