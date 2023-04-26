import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'entities/comment/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        articleId: '1',
        id: '1',
        text: 'Cool article',
        user: {
          id: '1',
          username: 'John Bonjovi',
          avatar,
        },
      },
      {
        articleId: '1',
        id: '2',
        text: 'Very nice',
        user: {
          id: '1',
          username: 'Marelin Manson',
          avatar,
        },
      },
      {
        articleId: '1',
        id: '3',
        text: 'I like this',
        user: {
          id: '1',
          username: 'Chester Bennington',
          avatar,
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args}/>;

export const Light = Template.bind({});

export const LightLoading = Template.bind({});
LightLoading.args = {
  comments: [],
  isLoading: true,
};

export const LightError = Template.bind({});
LightError.args = {
  comments: [],
  isLoading: false,
  error: 'error',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkLoading.args = {
  comments: [],
  isLoading: true,
};

export const DarkError = Template.bind({});
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
DarkError.args = {
  comments: [],
  isLoading: false,
  error: 'error',
};
