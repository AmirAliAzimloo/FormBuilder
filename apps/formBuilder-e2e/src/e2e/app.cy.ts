import { getGreeting } from '../support/app.po';

describe('formBuilder-e2e', () => {
  beforeEach(() =>{
     cy.wait(5000);
     cy.visit('http://localhost:3000');
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
