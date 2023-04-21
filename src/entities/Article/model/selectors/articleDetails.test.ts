import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from '../types/article';
import { ArticleBlockType, ArticleType } from '../consts/consts';

describe('articleDetails.test', () => {
  test('getArticleDetailsData', () => {
    const data: Article = {
      id: '1',
      title: 'Javascript news',
      user: {
        id: '1',
        username: 'Admin',
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

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('getArticleDetailsData with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('getArticleDetailsIsLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('getArticleDetailsError with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
