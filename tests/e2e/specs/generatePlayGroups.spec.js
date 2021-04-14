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

  it('Error message displays when either spell table url is not filled out', () => {
    cy.get('button').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      'Please enter a url for each spell table url input!'
    );
  });

  it('Will redirect to user home when contacted successfully', () => {
    cy.get('[data-testid="Spell Table Url For Play Group #1"]').type(
      'spelltable.com'
    );
    cy.get('[data-testid="Spell Table Url For Play Group #2"]').type(
      'spelltable.com'
    );

    cy.intercept('POST', `${Cypress.env('API_URL')}/pods/contact`, {
      statusCode: 200,
    });

    cy.get('button').click();

    cy.get('h1').should('have.text', 'User Home');
  });
});
