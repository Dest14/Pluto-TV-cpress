describe('Pluto TV Homepage Navigation Test', () => {
  it('Accepts cookies, clicks the Hamburger button, clicks the Search link, types a query, and submits the search', () => {
    cy.visit('https://pluto.tv/');

    cy.contains('button', 'Acceptera').click({ force: true });

    cy.get('button#hamburger-menu-btn-atc').click();
    cy.wait(3000)

    cy.get('a.watchNowLink-0-2-39').contains('Search', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(3000)
    cy.get('button#hamburger-menu-btn-atc').click();
    cy.get('a.watchNowLink-0-2-39')
      .contains('On Demand')
      .should('be.visible')
      .click();
  });
});