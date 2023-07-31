export const updateProfile = (
  name: string = 'new_name',
  lastname: string = 'new_lastname',
) => {
  cy.getByTestId('ProfileHeader.editButton').click();
  cy.getByTestId('ProfileCard.firstName').clear().type(name);
  cy.getByTestId('ProfileCard.lastName').clear().type(lastname);
  cy.getByTestId('ProfileHeader.saveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'some-token-here' },
    body: {
      id: '4',
      name: 'testuser',
      lastname: 'testuser',
      age: 32,
      currency: 'USD',
      country: 'USA',
      city: 'Los Angeles',
      username: 'user',
      avatar:
        'https://thumbs.dreamstime.com/b/hacker-avatar-character-isolated-icon-illustration-design-84235658.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (name?: string, lastname?: string) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
    }
  }
}
