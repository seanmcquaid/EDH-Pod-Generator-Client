describe('Pod Info Page', () => {
  beforeEach(() => {
    cy.intercept(`${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.visit('/podInfo/Pod1');
  });

  it('Displays pod name and spell table url on load', () => {});

  it('Displays new member when added', () => {});
});
