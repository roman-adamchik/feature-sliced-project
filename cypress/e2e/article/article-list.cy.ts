describe('User open articles list page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('articles');
  });

  it('and articles list is loaded successfully', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
  });

  it('and articles list is loaded successfully (fixture example)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'article-list.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
  });

  it.skip('example of skipping test', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    cy.getByTestId('some_non_existent_id').should('exist');
  });
});
