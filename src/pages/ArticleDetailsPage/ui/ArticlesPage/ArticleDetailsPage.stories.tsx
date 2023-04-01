import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, type Article, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import avatar from 'shared/assets/tests/avatar.jpg';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
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
        "The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be \"negatively indexed\", just like in Python. It's a more general approach, which is to allow relative indexing.",
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://yakovfain.files.wordpress.com/2013/04/dsc03412.jpg',
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
      src: 'https://www.idlehearts.com/images/in-javascript-there-is-a-beautiful-elegant-highly-expressive-language-that-is.jpg',
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

const recommendedArticle1 = {
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  id: '7',
  title: 'JS news',
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1322,
  userId: '1',
  createdAt: '1.01.2023',
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
} as Article;

const recommendedArticle2 = {
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  id: '4',
  title: 'PHP news',
  subtitle: "What's new in PHP in 2023?",
  img: 'https://twtv3.ams3.digitaloceanspaces.com/posts/php-twt.png',
  views: 3342,
  userId: '1',
  createdAt: '13.03.2019',
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
} as Article;

const recommendedArticle3 = {
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  id: '5',
  title: 'JS news',
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 3282,
  userId: '1',
  createdAt: '23.01.2020',
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
} as Article;

const recommendedArticle4 = {
  user: {
    id: '1',
    username: 'Admin',
    avatar,
  },
  id: '6',
  title: 'JS news',
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 32200,
  userId: '1',
  createdAt: '09.08.2022',
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
} as Article;

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
      articleRecommendationsList: {
        ids: [
          '1',
          '2',
          '3',
          '4',
        ],
        entities: {
          1: recommendedArticle1,
          2: recommendedArticle2,
          3: recommendedArticle3,
          4: recommendedArticle4,
        },
      },
    }),
  ],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
