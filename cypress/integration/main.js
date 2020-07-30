Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception', err);
    return false;
  });


    describe("Verify tha availability...", function() {
      it("Should try to buy a pair of shoes", function() {
        cy.visit("https://www.nike.com/mx/launch/t/benassi-stussy-off-noir");
        cy.wait(10000);
      });
    });