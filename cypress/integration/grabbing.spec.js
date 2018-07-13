context('Grabbing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('digitalocean.com', () => {
    cy.get('.domain-form__input-domain').type('https://digitalocean.com/');
    cy.get('.domain-form__button-grab').click();
  });
});
