import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'JS news',
  subtitle: "What's new in JS in 2023?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 758,
  userId: '1',
  createdAt: '14.02.2023',
  type: [
    'IT',
  ],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { authorization: 'some-token-here' },
    body: article ?? defaultArticle,
  }).then(({ body }) => body);
};

export const deleteArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { authorization: 'some-token-here' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle: (article?: Article) => Chainable<Article>
      deleteArticle: (articleId: string) => Chainable<void>
    }
  }
}
