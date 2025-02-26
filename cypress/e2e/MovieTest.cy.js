describe('Pluto TV Expand Button Click', () => {
  it('Clicks the Expand Video Player button', () => {

    cy.visit('https://pluto.tv/se/on-demand');


    cy.contains('button', 'Acceptera', { timeout: 10000 }).click({ force: true });

    cy.wait(3000);
    cy.get('button.dockUpButton-0-2-230').then(($btn) => {
      $btn[0].click();
    });
    cy.wait(3000);
    cy.get('button.toggleFullscreenButton-0-2-115')
      .then(($btn) => {
        $btn[0].click();
      });
  });
});
