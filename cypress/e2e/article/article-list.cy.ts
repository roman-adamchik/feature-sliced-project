describe('User open articles list page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('articles');
  });

  it('and articles list is loaded successfully', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
