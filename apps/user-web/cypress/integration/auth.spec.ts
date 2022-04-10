/// <reference types="cypress" />

describe('User Authentication', () => {
  it('should be able to create new account', () => {
    // Start from the index page
    cy.visit('http://localhost:3003/');

    // go to register page
    cy.get('a[href="/register"]').click();
    cy.url().should('include', '/register');

    // input name & false email & keep other forms empty
    cy.get('input[name="name"]')
      .type('Khoirul')
      .should('have.value', 'Khoirul');
    cy.get('input[name="email"]')
      .type('khoirul')
      .should('have.value', 'khoirul');

    // click register
    cy.get('button[type="submit"]').click();

    // make sure to get error because many form still empty
    cy.get('span').contains('Invalid email address');
    cy.get('span').contains('Required');

    // input other form
    // make confirm password different from password
    cy.get('input[name="email"]')
      .type('@email.com')
      .should('have.value', 'khoirul@email.com');
    cy.get('input[name="password"]')
      .type('password')
      .should('have.value', 'password');
    cy.get('input[name="confirmPassword"]')
      .type('pass')
      .should('have.value', 'pass');
    cy.get('input[name="username"]')
      .type('asfian')
      .should('have.value', 'asfian');

    // click register again
    cy.get('button[type="submit"]').click();

    // make sure to get error because confirm password not match
    cy.get('span').contains("Passwords don't match");

    // fix confirm password input
    cy.get('input[name="confirmPassword"]')
      .type('word')
      .should('have.value', 'password');

    // click register again
    cy.get('button[type="submit"]').click();

    // validate that register success and  the new url should include "/dashboard"
    cy.url().should('include', '/dashboard');

    // The new page should contain an h2 with "Today"
    cy.get('h2').contains('Today');
  });

  it('should be able to login with correct format', () => {
    // Start from the index page
    cy.visit('http://localhost:3003/');

    // go to register page
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');

    // input false email format & keep password empty
    cy.get('input[name="email"]')
      .type('khoirul@email')
      .should('have.value', 'khoirul@email');

    // click login
    cy.get('button[type="submit"]').click();

    // validate that login is failed because invalid email format & empty password
    cy.get('span').contains('Invalid email address');
    cy.get('span').contains('Required');

    // type correct email format & add password
    cy.get('input[name="email"]')
      .type('.com')
      .should('have.value', 'khoirul@email.com');
    cy.get('input[name="password"]')
      .type('password')
      .should('have.value', 'password');

    // click login again
    cy.get('button[type="submit"]').click();

    // The new url should include "/dashboard"
    cy.url().should('include', '/dashboard');

    // The new page should contain an h2 with "Today"
    cy.get('h2').contains('Today');
  });
});
