let profileId: string;

describe('User opens profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('and profile card successfully loaded', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'testuser');
  });

  it('and successfully changed and saved', () => {
    const NEW_NAME = 'new_name';
    const NEW_LASTNAME = 'new_lastname';
    cy.updateProfile(NEW_NAME, NEW_LASTNAME);
    cy.getByTestId('ProfileCard.firstName').should('have.value', NEW_NAME);
    cy.getByTestId('ProfileCard.lastName').should('have.value', NEW_LASTNAME);
  });
});
