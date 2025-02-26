describe('Pluto TV Homepage Navigation Test', () => {
  it('Accepts cookies, clicks the Hamburger button, and clicks the Support link', () => {
    cy.visit('https://pluto.tv/');

    cy.contains('button', 'Acceptera').click({ force: true });

    cy.get('button#hamburger-menu-btn-atc').click();
    cy.wait(3000);

    cy.get('a[href="https://support.pluto.tv/"]')
      .contains('Support', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  });
});