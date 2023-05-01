import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
    withMock,
  ],
  parameters: {
    mockData: [
      {
        url: `${GLOBAL_API_URL}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
        ],
      },
    ],
  },
  args: {
    articleId: '1',
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightRated = Template.bind({});
LightRated.parameters = {
  mockData: [
    {
      url: `${GLOBAL_API_URL}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          rate: '4',
          articleId: '1',
          userId: '1',
        },
      ],
    },
  ],
};

export const DarkRated = Template.bind({});
DarkRated.decorators = [ThemeDecorator(Theme.DARK)];
DarkRated.parameters = {
  mockData: [
    {
      url: `${GLOBAL_API_URL}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          rate: '4',
          articleId: '1',
          userId: '1',
        },
      ],
    },
  ],
};
