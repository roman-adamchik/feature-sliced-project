export const addComment = (content?: string) => {
  const defaultComment = 'Test comment';
  cy.getByTestId('AddCommentForm.input').clear().type(content || defaultComment);
  cy.getByTestId('AddCommentForm.submit').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment: (content?: string) => Chainable<void>
    }
  }
}
