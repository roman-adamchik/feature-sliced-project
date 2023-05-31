/* eslint-disable max-len */
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import withMock from 'storybook-addon-mock';

const article = {
  title: 'Python news',
  subtitle: "What's new in Python in 2023?",
  views: 3043,
  userId: '2',
  createdAt: '18.01.2023',
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Introduced top-level await',
      paragraphs: [
        'Prior to this, the await keyword could only be used inside async functions, and a syntax error would occur if forced: await is only valid in async functions and the top level bodies of modules',
        'It is now possible to use await at the top level of a file, which will be treated as an ECMAScript module. Here is the official example:',
      ],
    },
  ],
};

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  decorators: [
    StoreDecorator({}),
    withMock,
  ],
  parameters: {
    mockData: [
      {
        url: `${GLOBAL_API_URL}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) =>
<ArticleRecommendationsList {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
