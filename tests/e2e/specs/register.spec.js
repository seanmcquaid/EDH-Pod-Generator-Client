/// <reference types="Cypress" />

describe('Register page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });
  it("Display error when passwords don't match", () => {
    cy.get('[data-testid=Username]').type('username here');
    cy.get('[data-testid=Password]').type('password');
    cy.get('[data-testid="Confirm Password"]').type('confirm password');

    cy.get('button').click();

    cy.get('span').should(
      'have.text',
      "The two passwords don't match, please change them!"
    );
  });

  it('Successfully redirects a user when provided with valid registration info', () => {
    cy.get('[data-testid=Username]').type('username here');
    cy.get('[data-testid=Password]').type('password');
    cy.get('[data-testid="Confirm Password"]').type('password');

    cy.intercept(`${Cypress.env('API_URL')}/users/register`, {
      fixture: 'register.json',
    });

    cy.get('button').click();

    cy.contains('h1', 'User Home');
  });
});
