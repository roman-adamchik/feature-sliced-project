import { selectByTestId } from './../../helpers/selectByTestId';
import { User } from '../../../src/entities/User';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '../../../src/shared/const/localStorage';

export const login = (
  username: string = 'testuser',
  password: string = 'testpas',
) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(body));

    return body;
  });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login: (email?: string, password?: string) => Chainable<User>
      getByTestId: (testId: string) => Chainable<JQuery<HTMLElement>>
    }
  }
}
