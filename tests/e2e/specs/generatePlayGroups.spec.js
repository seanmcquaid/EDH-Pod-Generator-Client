describe('Generate Play Groups', () => {
  beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods/generate/Pod1`, {
      fixture: 'generatePlayGroups.json',
    });

    cy.visit('/generatePlayGroups/Pod1');
  });
  it('Two play groups display', () => {
    cy.get('[data-testid=playGroup1] > span').should('be.visible');
    cy.get('[data-testid=playGroup2] > span').should('be.visible');
  });
});
