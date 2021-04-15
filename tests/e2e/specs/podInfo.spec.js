describe('Pod Info Page', () => {
  it('Displays new member when added', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.visit('/podInfo/Pod1');

    cy.intercept('POST', `${Cypress.env('API_URL')}/pods/member`, {
      fixture: 'addAnotherPodMember.json',
    });

    cy.get('[data-testid=Name]').type('Terell');
    cy.get('[data-testid=Email]').type('terell@mail.com');

    cy.get('[data-testid=AddPodMemberForm] > button').click();

    cy.get('[data-testid=Terell] > span').should('be.visible');
  });
});
