import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { type Article } from '../../model/types/article';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleDetails } from './ArticleDetails';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';
import jsLogo from '@/shared/assets/tests/js-logo.png';
import articleImage1 from '@/shared/assets/tests/article-details-image-01.jpeg';
import articleImage2 from '@/shared/assets/tests/article-details-image-02.jpeg';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  subtitle: "What's new in JS in 2023?",
  img: jsLogo,
  views: 6022,
  createdAt: '26.02.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Introduced top-level await',
      paragraphs: [
        'Prior to this, the await keyword could only be used inside async functions, and a syntax error would occur if forced: await is only valid in async functions and the top level bodies of modules',
        'It is now possible to use await at the top level of a file, which will be treated as an ECMAScript module. Here is the official example:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: "const arr = ['1', '2', '3'];\n// '3'\nconsole.log(arr.at(-1));\n// '2'\nconsole.log(arr.at(-2));",
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'The at method for Strings, Arrays, and TypedArrays',
      paragraphs: [
        'The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be "negatively indexed", just like in Python. It\'s a more general approach, which is to allow relative indexing.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: articleImage1,
      title: 'Picture 1 - developers workspace',
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Object.hasOwn() and lorem',
      paragraphs: [
        'Object.hasOwn is a convenient alternative to Object.prototype.hasOwnProperty. I covered it in great detail in a previous article. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quam deleniti ipsam. Ea tempora ratione molestias nostrum et quas sed corrupti, alias accusantium, neque odio in quis repellat nemo nihil?',
      ],
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: articleImage2,
      title: 'Image 2 - screenshot',
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Lorem 50',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, incidunt facere impedit cupiditate expedita sed eveniet, esse soluta nihil similique laboriosam eius tenetur ipsum atque doloremque harum. Aliquid repudiandae asperiores porro, in ipsa quaerat nulla accusantium ratione similique! Labore placeat cum quos rem dignissimos eveniet ea necessitatibus reprehenderit maxime?',
      ],
    },
  ],
};

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
);

export const Light = Template.bind({});

export const LightIsLoading = Template.bind({});
LightIsLoading.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const LightError = Template.bind({});
LightError.decorators = [
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const DarkError = Template.bind({});
DarkError.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];
