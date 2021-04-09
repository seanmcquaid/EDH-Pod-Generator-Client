describe('Pod Info Page', () => {
  beforeEach(() => {
    cy.intercept(`${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.visit('/podInfo/Pod1');
  });

  it('Displays new member when added', () => {
    cy.intercept(`${Cypress.env('API_URL')}/pods/member`, {
      fixture: 'addAnotherPodMember.json',
    });

    cy.get('[data-testid=Name]').type('Terell');
    cy.get('[data-testid=Email]').type('terell@mail.com');

    cy.get('button').click();

    cy.get('[data-testid=Terell] > span').should('be.visible');
  });
});
