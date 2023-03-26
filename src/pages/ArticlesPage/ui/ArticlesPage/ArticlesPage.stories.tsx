import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import ArticlesPage from './ArticlesPage';
import { type ArticlePageSchema } from '../../model/types/articlePageSchema';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ArticleListViewType } from 'entities/Article';

const articlesPage = {
  ids: [
    '1',
    '2',
    '3',
    '4',
  ],
  entities: {
    1: {
      id: '1',
      title: 'Javascript news',
      subtitle: 'What\'s new in JS in 2023?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 6022,
      userId: '1',
      createdAt: '26.02.2023',
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
        {
          id: '4',
          type: 'CODE',
          code: 'const arr = [\'1\', \'2\', \'3\'];\n// \'3\'\nconsole.log(arr.at(-1));\n// \'2\'\nconsole.log(arr.at(-2));',
        },
        {
          id: '5',
          type: 'TEXT',
          title: 'The at method for Strings, Arrays, and TypedArrays',
          paragraphs: [
            'The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be "negatively indexed", just like in Python. It\'s a more general approach, which is to allow relative indexing.',
          ],
        },
        {
          id: '2',
          type: 'IMAGE',
          src: 'https://yakovfain.files.wordpress.com/2013/04/dsc03412.jpg',
          title: 'Picture 1 - developers workspace',
        },
        {
          id: '3',
          type: 'CODE',
          code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
        {
          id: '7',
          type: 'TEXT',
          title: 'Object.hasOwn() and lorem',
          paragraphs: [
            'Object.hasOwn is a convenient alternative to Object.prototype.hasOwnProperty. I covered it in great detail in a previous article. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quam deleniti ipsam. Ea tempora ratione molestias nostrum et quas sed corrupti, alias accusantium, neque odio in quis repellat nemo nihil?',
          ],
        },
        {
          id: '8',
          type: 'IMAGE',
          src: 'https://www.idlehearts.com/images/in-javascript-there-is-a-beautiful-elegant-highly-expressive-language-that-is.jpg',
          title: 'Image 2 - screenshot',
        },
        {
          id: '9',
          type: 'TEXT',
          title: 'Lorem 50',
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, incidunt facere impedit cupiditate expedita sed eveniet, esse soluta nihil similique laboriosam eius tenetur ipsum atque doloremque harum. Aliquid repudiandae asperiores porro, in ipsa quaerat nulla accusantium ratione similique! Labore placeat cum quos rem dignissimos eveniet ea necessitatibus reprehenderit maxime?',
          ],
        },
      ],
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: 'ADMIN',
        avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
      },
    },
    2: {
      id: '2',
      title: 'Python news',
      subtitle: 'What\'s new in Python in 2023?',
      img: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png',
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
        {
          id: '4',
          type: 'CODE',
          code: 'const arr = [\'1\', \'2\', \'3\'];\n// \'3\'\nconsole.log(arr.at(-1));\n// \'2\'\nconsole.log(arr.at(-2));',
        },
        {
          id: '5',
          type: 'TEXT',
          title: 'The at method for Strings, Arrays, and TypedArrays',
          paragraphs: [
            'The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be "negatively indexed", just like in Python. It\'s a more general approach, which is to allow relative indexing.',
          ],
        },
        {
          id: '2',
          type: 'IMAGE',
          src: 'https://yakovfain.files.wordpress.com/2013/04/dsc03412.jpg',
          title: 'Picture 1 - developers workspace',
        },
        {
          id: '3',
          type: 'CODE',
          code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
        {
          id: '7',
          type: 'TEXT',
          title: 'Object.hasOwn() and lorem',
          paragraphs: [
            'Object.hasOwn is a convenient alternative to Object.prototype.hasOwnProperty. I covered it in great detail in a previous article. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quam deleniti ipsam. Ea tempora ratione molestias nostrum et quas sed corrupti, alias accusantium, neque odio in quis repellat nemo nihil?',
          ],
        },
        {
          id: '8',
          type: 'IMAGE',
          src: 'https://www.idlehearts.com/images/in-javascript-there-is-a-beautiful-elegant-highly-expressive-language-that-is.jpg',
          title: 'Image 2 - screenshot',
        },
        {
          id: '9',
          type: 'TEXT',
          title: 'Lorem 50',
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, incidunt facere impedit cupiditate expedita sed eveniet, esse soluta nihil similique laboriosam eius tenetur ipsum atque doloremque harum. Aliquid repudiandae asperiores porro, in ipsa quaerat nulla accusantium ratione similique! Labore placeat cum quos rem dignissimos eveniet ea necessitatibus reprehenderit maxime?',
          ],
        },
      ],
      user: {
        id: '2',
        username: 'user',
        password: '123',
        role: 'USER',
        avatar: 'https://thumbs.dreamstime.com/b/hacker-avatar-character-isolated-icon-illustration-design-84235658.jpg',
      },
    },
    3: {
      id: '3',
      title: 'Java news',
      subtitle: 'What\'s new in Java in 2023?',
      img: 'https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg',
      views: 1055,
      userId: '1',
      createdAt: '29.03.2023',
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
        {
          id: '4',
          type: 'CODE',
          code: 'const arr = [\'1\', \'2\', \'3\'];\n// \'3\'\nconsole.log(arr.at(-1));\n// \'2\'\nconsole.log(arr.at(-2));',
        },
        {
          id: '5',
          type: 'TEXT',
          title: 'The at method for Strings, Arrays, and TypedArrays',
          paragraphs: [
            'The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be "negatively indexed", just like in Python. It\'s a more general approach, which is to allow relative indexing.',
          ],
        },
        {
          id: '2',
          type: 'IMAGE',
          src: 'https://yakovfain.files.wordpress.com/2013/04/dsc03412.jpg',
          title: 'Picture 1 - developers workspace',
        },
        {
          id: '3',
          type: 'CODE',
          code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
        {
          id: '7',
          type: 'TEXT',
          title: 'Object.hasOwn() and lorem',
          paragraphs: [
            'Object.hasOwn is a convenient alternative to Object.prototype.hasOwnProperty. I covered it in great detail in a previous article. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quam deleniti ipsam. Ea tempora ratione molestias nostrum et quas sed corrupti, alias accusantium, neque odio in quis repellat nemo nihil?',
          ],
        },
        {
          id: '8',
          type: 'IMAGE',
          src: 'https://www.idlehearts.com/images/in-javascript-there-is-a-beautiful-elegant-highly-expressive-language-that-is.jpg',
          title: 'Image 2 - screenshot',
        },
        {
          id: '9',
          type: 'TEXT',
          title: 'Lorem 50',
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, incidunt facere impedit cupiditate expedita sed eveniet, esse soluta nihil similique laboriosam eius tenetur ipsum atque doloremque harum. Aliquid repudiandae asperiores porro, in ipsa quaerat nulla accusantium ratione similique! Labore placeat cum quos rem dignissimos eveniet ea necessitatibus reprehenderit maxime?',
          ],
        },
      ],
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: 'ADMIN',
        avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
      },
    },
    4: {
      id: '4',
      title: 'PHP news',
      subtitle: 'What\'s new in PHP in 2023?',
      img: 'https://twtv3.ams3.digitaloceanspaces.com/posts/php-twt.png',
      views: 322,
      userId: '1',
      createdAt: '15.07.2020',
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
        {
          id: '4',
          type: 'CODE',
          code: 'const arr = [\'1\', \'2\', \'3\'];\n// \'3\'\nconsole.log(arr.at(-1));\n// \'2\'\nconsole.log(arr.at(-2));',
        },
        {
          id: '5',
          type: 'TEXT',
          title: 'The at method for Strings, Arrays, and TypedArrays',
          paragraphs: [
            'The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be "negatively indexed", just like in Python. It\'s a more general approach, which is to allow relative indexing.',
          ],
        },
        {
          id: '2',
          type: 'IMAGE',
          src: 'https://yakovfain.files.wordpress.com/2013/04/dsc03412.jpg',
          title: 'Picture 1 - developers workspace',
        },
        {
          id: '3',
          type: 'CODE',
          code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
        {
          id: '7',
          type: 'TEXT',
          title: 'Object.hasOwn() and lorem',
          paragraphs: [
            'Object.hasOwn is a convenient alternative to Object.prototype.hasOwnProperty. I covered it in great detail in a previous article. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quam deleniti ipsam. Ea tempora ratione molestias nostrum et quas sed corrupti, alias accusantium, neque odio in quis repellat nemo nihil?',
          ],
        },
        {
          id: '8',
          type: 'IMAGE',
          src: 'https://www.idlehearts.com/images/in-javascript-there-is-a-beautiful-elegant-highly-expressive-language-that-is.jpg',
          title: 'Image 2 - screenshot',
        },
        {
          id: '9',
          type: 'TEXT',
          title: 'Lorem 50',
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, incidunt facere impedit cupiditate expedita sed eveniet, esse soluta nihil similique laboriosam eius tenetur ipsum atque doloremque harum. Aliquid repudiandae asperiores porro, in ipsa quaerat nulla accusantium ratione similique! Labore placeat cum quos rem dignissimos eveniet ea necessitatibus reprehenderit maxime?',
          ],
        },
      ],
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: 'ADMIN',
        avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
      },
    },
  },
  isLoading: false,
  view: 'list',
  hasMore: true,
  page: 1,
} as ArticlePageSchema;

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [
    StoreDecorator({
      articlesPage,
    }),
  ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const LightList = Template.bind({});

export const LightTable = Template.bind({});
LightTable.decorators = [StoreDecorator({
  articlesPage: {
    ...articlesPage,
    view: ArticleListViewType.TABLE,
  },
})];

export const DarkList = Template.bind({});
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTable = Template.bind({});
DarkTable.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articlesPage: {
      ...articlesPage,
      view: ArticleListViewType.TABLE,
    },
  }),
];
