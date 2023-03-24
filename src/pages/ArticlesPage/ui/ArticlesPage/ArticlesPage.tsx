import { type Article, ArticleList, ArticleListViewType } from 'entities/Article';
import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const article = {
  id: '1',
  title: 'Javascript news',
  user: {
    id: '1',
    username: 'Admin',
    avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
  },
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 6022,
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
      code: "const arr = ['1', '2', '3'];\n// '3'\nconsole.log(arr.at(-1));\n// '2'\nconsole.log(arr.at(-2));",
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'The at method for Strings, Arrays, and TypedArrays',
      paragraphs: [
        "The at() method solves the very practical problem that all basic indexable classes (Array, String, TypedArray) can be \"negatively indexed\", just like in Python. It's a more general approach, which is to allow relative indexing.",
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
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
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
} as Article;

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className = '',
  } = props;

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList view={ArticleListViewType.LIST} articles={new Array(16).fill(0).map(
        (_item, idx) => ({
          ...article,
          id: String(idx + 1),
        }),
      )} />
    </div>
  );
};

export default ArticlesPage;
