describe('Generate Play Groups', () => {
  beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods/generate/Pod1`, {
      fixture: 'generatePlayGroups.json',
    });

    cy.visit('/generatePlayGroups/Pod1');
  });
  it('', () => {});
});
