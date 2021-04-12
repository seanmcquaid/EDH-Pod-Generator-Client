describe('Pods Page', () => {
  it('Can navigate to pod page', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.visit('/pods');

    cy.get('[data-testid=Pod1] > a').click();

    cy.get('h1').should('have.text', 'Pod Info');
  });
});
