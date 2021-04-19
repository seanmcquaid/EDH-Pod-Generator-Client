/// <reference types="Cypress" />

describe('Add Pod Page', () => {
  beforeEach(() => {
    cy.visit('/addPod');
  });

  it('Error message displays when pod name is not provided on submission', () => {
    cy.get('button').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      'Please enter the name of the pod!'
    );
  });

  it('Add pod member form displays once the name is confirmed', () => {
    cy.get('[data-testid="Pod Name"]').type('Pod #1');
    cy.get('button').click();

    cy.get('[data-testid="AddPodMemberForm"]').should('be.visible');
  });

  it('Successfully adding a pod member displays the added pod member', () => {
    cy.get('[data-testid="Pod Name"]').type('Pod #1');
    cy.get('button').click();

    cy.intercept('POST', `${Cypress.env('API_URL')}/pods/member`, {
      fixture: 'addOnePodMember.json',
    });

    cy.get('[data-testid="Member Name"]').type('Sean');
    cy.get('[data-testid="Member Email"]').type('sean@mail.com');

    cy.intercept('GET', `${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.get('button').click();

    cy.get('h1').should('have.text', 'Pod Info');
  });
});
