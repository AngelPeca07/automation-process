import data from '../../src/books.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception', err);
    return false;
  });


    describe("Verify tha availability...", function() {
        const url = data[0].author;
      it("Should try to buy a pair of shoes", function() {
        cy.visit(url);
        cy.wait(5000);
        cy.get('.is-sizeSelector__sizes__option-wrapper').contains('30.5').click();
      });
      it("Log In", function() {
        cy.get('#j_username').type('apecast.tech@gmail.com');
        cy.get('#j_password').type('xJvad.NhpTm24R3');
        cy.get('.buttons').eq(0).click();
      });
      it("Check the landing page...", function() {
        cy.get('a').contains("Mi cuenta");
      });
    });