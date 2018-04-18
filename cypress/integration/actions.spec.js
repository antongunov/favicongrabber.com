context('Actions', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('Grab digitalocean.com', function () {
    cy.get('.domain-form__input-domain').type('https://digitalocean.com/');
    cy.get('.domain-form__button-grab').click();
  });
});
