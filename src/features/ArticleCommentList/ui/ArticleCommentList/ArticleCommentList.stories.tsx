import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleCommentList } from './ArticleCommentList';

export default {
  title: 'features/ArticleCommentList',
  component: ArticleCommentList,
  decorators: [StoreDecorator({
    articleDetailsComments: {
      ids: [
        '1',
        '2',
        '3',
      ],
      entities: {
        1: {
          id: '1',
          text: 'some comment',
          articleId: '1',
          user: {
            id: '1',
            username: 'admin',
            avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
          },
        },
        2: {
          id: '2',
          text: 'some comment 2',
          articleId: '1',
          user: {
            id: '2',
            username: 'user',
            avatar: 'https://thumbs.dreamstime.com/b/hacker-avatar-character-isolated-icon-illustration-design-84235658.jpg',
          },
        },
        3: {
          id: '3',
          text: 'some comment 3',
          articleId: '1',
          user: {
            id: '1',
            username: 'admin',
            avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
          },
        },
      },
      isLoading: false,
    },
  })],
} as ComponentMeta<typeof ArticleCommentList>;

const Template: ComponentStory<
  typeof ArticleCommentList
> = (args) => <ArticleCommentList {...args}/>;

export const Light = Template.bind({});

export const LightWithError = Template.bind({});
LightWithError.decorators = [StoreDecorator({
  articleDetailsComments: {
    ids: [],
    entities: {},
    error: 'error',
  },
})];

export const LightLoading = Template.bind({});
LightLoading.decorators = [StoreDecorator({
  articleDetailsComments: {
    ids: [],
    entities: {},
    isLoading: true,
  },
})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetailsComments: {
      ids: [],
      entities: {},
      isLoading: true,
    },
  }),
];

export const DarkWithError = Template.bind({});
DarkWithError.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetailsComments: {
      ids: [],
      entities: {},
      error: 'error',
    },
  }),
];
