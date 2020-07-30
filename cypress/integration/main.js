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
        cy.wait(10000);
        cy.scrollTo(0, 500);
      });
    });