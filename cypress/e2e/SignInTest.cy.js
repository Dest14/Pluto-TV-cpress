describe('Pluto TV Homepage Test', () => {
  it('Accepts cookies, clicks the Sign In button, types a random email, and clicks Next', () => {
    cy.visit('https://pluto.tv/');

    cy.contains('button', 'Acceptera').click({ force: true });


    cy.contains('a', 'Sign In', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('input[type="email"]', { timeout: 10000 }).should('be.visible');

    const randomEmail = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
    cy.get('input[type="email"]').type(randomEmail);


    cy.contains('button', 'Next').click();
  });
});
