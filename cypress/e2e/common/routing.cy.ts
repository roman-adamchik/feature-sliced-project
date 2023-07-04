import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing test', () => {
  describe('Routing for NOT authorized user', () => {
    it('User open main page', () => {
      cy.visit('');
      cy.get(selectByTestId('MainPage'))
        .should('exist');
    });

    it('User open profile page', () => {
      cy.visit('profile/1');
      cy.get(selectByTestId('MainPage'))
        .should('exist');
    });

    it('User open non-existent page', () => {
      cy.visit('some-non-exist-page');
      cy.get(selectByTestId('NotFoundPage'))
        .should('exist');
    });
  });

  describe('Routing for authorized user', () => {
    beforeEach(() => {
      cy.login();
    });

    it('User open profile page', () => {
      cy.visit('profile/4');
      cy.get(selectByTestId('ProfilePage'))
        .should('exist');
    });

    it('User open articles page', () => {
      cy.visit('articles');
      cy.get(selectByTestId('ArticlesPage'))
        .should('exist');
    });
  });
});
