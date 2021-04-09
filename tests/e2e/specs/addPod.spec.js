/// <reference types="Cypress" />

describe('Add Pod Page', () => {
  beforeEach(() => {
    cy.visit('/addPod');
  });

  it('Error message displays when pod name is not provided on submission', () => {
    cy.get('[data-testid="Spell Table Link"]').type('www.spelltable.com');
    cy.get('button').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      'Please enter information in both fields!'
    );
  });

  it('Error message displays when spell table link is not provided on submission', () => {
    cy.get('[data-testid="Pod Name"]').type('Pod #1');
    cy.get('button').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      'Please enter information in both fields!'
    );
  });

  it('Add pod member form displays once the name and spell table link is confirmed', () => {
    cy.get('[data-testid="Pod Name"]').type('Pod #1');
    cy.get('[data-testid="Spell Table Link"]').type('www.spelltable.com');
    cy.get('button').click();

    cy.get('[data-testid="AddPodMemberForm"]').should('be.visible');
  });

  it('Successfully adding a pod member displays the added pod member', () => {
    cy.get('[data-testid="Pod Name"]').type('Pod #1');
    cy.get('[data-testid="Spell Table Link"]').type('www.spelltable.com');
    cy.get('button').click();

    cy.intercept(`${Cypress.env('API_URL')}/pods/member`, {
      fixture: 'addPodMember.json',
    });

    cy.get('[data-testid=Name]').type('Sean');
    cy.get('[data-testid=Email]').type('sean@mail.com');

    cy.intercept(`${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.get('button').click();

    cy.get('h1').should('have.text', 'Pod Info');
  });
});
