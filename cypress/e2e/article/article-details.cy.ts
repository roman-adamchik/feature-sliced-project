let articleId: string;

describe('User opened article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((data) => {
      articleId = data.id;
      cy.visit(`/articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.deleteArticle(articleId);
  });

  it('and article details block is loaded', () => {
    cy.getByTestId('ArticleDetails.avatarWrapper').should('exist');
  });

  it('and articles recommendations list is loaded', () => {
    cy.getByTestId('ArticleRecommendationsList.wrapper').should('exist');
  });

  it('and leaves a comment', () => {
    const TEST_COMMENT = 'New test comment';

    cy.getByTestId('ArticleDetails.avatarWrapper');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment(TEST_COMMENT);
    cy.getByTestId('CommentCard.paragraph').should('have.length', 1);
    cy.getByTestId('CommentCard.paragraph').should('have.text', TEST_COMMENT);
  });

  it('and rate the article', () => {
    const FEEDBACK = 'Test feedback';
    const RATE_NUMBER = 3;

    cy.getByTestId('ArticleDetails.avatarWrapper');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(RATE_NUMBER, FEEDBACK);
    cy.get('[data-selected=true').should('have.length', RATE_NUMBER);
  });
});
