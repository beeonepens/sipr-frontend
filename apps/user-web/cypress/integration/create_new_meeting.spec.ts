/// <reference types="cypress" />

describe('New Meeting', () => {
  it('should be able to create new meeting', () => {
    // Start from the index page
    cy.visit('http://localhost:3003/');

    // go to login page
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');

    // login with correct credential
    cy.get('input[name="email"]')
      .type('khoirul@email.com')
      .should('have.value', 'khoirul@email.com');
    cy.get('input[name="password"]')
      .type('11223344')
      .should('have.value', '11223344');

    // click login
    cy.get('button[type="submit"]').click();

    // validate that login success and  the new url should include "/dashboard"
    cy.url().should('include', '/dashboard');
    cy.get('h2').contains('Today');

    // click "create" new meeting button
    cy.findByRole('button', { name: 'Create' }).click();

    // expect meeting modal to be open
    cy.get('h3').contains('Schedule New Meeting');

    // save meeting with empty form
    cy.get('button[type="submit"]').click();

    // expect form error
    cy.get('span').contains('Required');

    // fill in the form
    cy.get('input[name="name"]')
      .type('Daily Scrum 2')
      .should('have.value', 'Daily Scrum 2');
    cy.get('textarea[name="description"]')
      .type('Second daily scrum for the current sprint')
      .should('have.value', 'Second daily scrum for the current sprint');
    cy.get('input[name="startDate"]')
      .clear()
      .type('10/04/2022 14:30')
      .should('have.value', '10/04/2022 14:30');
    cy.get('input[name="endDate"]')
      .clear()
      .type('10/04/2022 16:00')
      .should('have.value', '10/04/2022 16:00');
    cy.get('input[name="location"]')
      .type('https://meet.google.com/abcde')
      .should('have.value', 'https://meet.google.com/abcde');

    // save meeting details
    cy.get('button[type="submit"]').click();

    // expect meeting modal to be closed
    cy.get('h3').contains('Schedule New Meeting').should('not.exist');
  });
});
