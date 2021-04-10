/// <reference types="Cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Successfully redirects a user when provided with valid login info', () => {
    cy.get('[data-testid=Username]').type('username here');
    cy.get('[data-testid=Password]').type('password');

    cy.intercept('POST', `${Cypress.env('API_URL')}/users/login`, {
      fixture: 'login.json',
    });

    cy.get('button').click();

    cy.contains('h1', 'User Home');
  });
});
