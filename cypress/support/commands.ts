import { LOCAL_STORAGE_AUTH_DATA_KEY } from '../../src/shared/const/localStorage';

Cypress.Commands.add('login', (
  username: string = 'testuser',
  password: string = 'testpas',
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(body));
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login: (email?: string, password?: string) => Chainable<void>
    }
  }
}

export {};
