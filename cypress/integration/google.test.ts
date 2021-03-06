describe('This is the first example of cypress', () => {
  it('should have a title', () => {
    cy.fixture('google-response').as('googleSearchResponse');
    cy.intercept('GET', '**/complete/search**', '@googleSearchResponse');
    cy.visit('https://www.google.com/');
    cy.get('[name="q"]')
      .type('Cypress');
    cy.title().should('be.equal', 'Google');
  });
});
