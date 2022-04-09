/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the login page', () => {
    // Start from the index page
    cy.visit('http://localhost:3003/');

    // Find a link with an href attribute containing "login" and click it
    cy.get('a[href*="login"]').click();

    // The new url should include "/login"
    cy.url().should('include', '/login');

    // The new page should contain an h1 with "Welcome back!"
    cy.get('h1').contains('Welcome back!');
  });

  it('should login with correct email format', () => {
    // Start from the login page
    cy.visit('http://localhost:3003/login');

    // input false email format & keep password empty
    cy.get('input[name="email"]')
      .type('fake@email')
      .should('have.value', 'fake@email');

    // click login
    cy.get('button[type="submit"]').click();

    // validate that login is failed because invalid email format & empty password
    cy.get('span').contains('Invalid email address');
    cy.get('span').contains('Required');

    // type correct email format & add password
    cy.get('input[name="email"]')
      .type('.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[name="password"]')
      .type('fake-password')
      .should('have.value', 'fake-password');

    // click login again
    cy.get('button[type="submit"]').click();

    // The new url should include "/dashboard"
    cy.url().should('include', '/dashboard');

    // The new page should contain an h1 with "Welcome back!"
    cy.get('h2').contains('Today');
  });
});
