import { getGreeting } from '../support/app.po';

describe('formBuilder-e2e', () => {

  it('should display welcome message', () => {
    cy.visit('/')
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
