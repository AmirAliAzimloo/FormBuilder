// import { getShadcnButton } from '../support/app.po';

// describe('formBuilder-e2e', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     // Custom command example, see `../support/commands.ts` file
//     cy.login('my-email@something.com', 'myPassword');

//     // Function helper example, see `../support/app.po.ts` file
//     getShadcnButton().contains(/Shadcn Button/);
//   });
// });

// describe('sign-in', () => {
  
//   beforeEach(() => {
//     cy.visit('/sign-in');
//   });

//   it('should render sign in page', () => {
//     cy.get('h1').contains('Sign In'); // Assuming there's a heading with "Sign In"
//     cy.get('form').should('exist'); // Check if the form exists
//   });

//   it('should have email and password fields', () => {
//     cy.get('input[name="email"]').should('exist');
//     cy.get('input[name="password"]').should('exist');
//   });

//   it('should show error for empty email and password', () => {
//     cy.get('button[type="submit"]').click();
//     cy.get('.error-message').should('contain', 'Email is required');
//     cy.get('.error-message').should('contain', 'Password is required');
//   });

//   it('should show error for invalid email format', () => {
//     cy.get('input[name="email"]').type('invalid-email');
//     cy.get('input[name="password"]').type('validpassword');
//     cy.get('button[type="submit"]').click();
//     cy.get('.error-message').should('contain', 'Invalid email format');
//   });

//   it('should show error for incorrect password', () => {
//     cy.get('input[name="email"]').type('valid@example.com');
//     cy.get('input[name="password"]').type('wrongpassword');
//     cy.get('button[type="submit"]').click();
//     cy.get('.error-message').should('contain', 'Incorrect password');
//   });

//   it('should sign in with valid credentials', () => {
//     cy.get('input[name="email"]').type('valid@example.com');
//     cy.get('input[name="password"]').type('correctpassword');
//     cy.get('button[type="submit"]').click();
//     cy.url().should('eq', Cypress.config().baseUrl + '/dashboard'); // Assuming successful sign in redirects to /dashboard
//   });

//   it('should meet basic accessibility standards', () => {
//     cy.injectAxe(); // Inject aXe for accessibility testing
//     cy.checkA11y(); // Check for accessibility issues
//   });
// });
