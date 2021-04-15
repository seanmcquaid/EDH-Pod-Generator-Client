/// <reference types="Cypress" />

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

  it('Deletes pod and redirects to user home', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods`, {
      fixture: 'getPods.json',
    });

    cy.visit('/podInfo/Pod1');

    cy.intercept('DELETE', `${Cypress.env('API_URL')}/pods/Pod1`, {
      fixture: 'deletePod.json',
    });

    cy.get('main > [data-v-5dad02cf=""]').click();

    cy.get('h1').should('have.text', 'User Home');
  });

  it('Deletes pod member and removes them from the view', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/pods`, {
      fixture: 'getMultiplePodMembers.json',
    });

    cy.visit('/podInfo/Pod1');

    cy.intercept('DELETE', `${Cypress.env('API_URL')}/pods/member/Terell`, {
      fixture: 'deletePodMember.json',
    });

    cy.get('[data-testid=Terell] > button').click();

    cy.get('[data-testid=Terell] > span').should('not.exist');
  });
});
