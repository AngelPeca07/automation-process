import data from '../../src/books.json'
import 'cypress-iframe'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception', err);
    return false;
  });


    describe("Verify the availability...", function() {
        const url = data[1].author;
      it("Should try to buy a pair of shoes", function() {
        cy.visit(url);
        cy.wait(3000);
        cy.scrollTo(0, 500);
        cy.get('.size-grid-dropdown').contains('CM 23').click();
        cy.get('.ncss-btn-black').click();
        cy.wait(10000);
        cy.get('.ta-sm-r > .bg-transparent > .g72-cart').click();
        cy.get('.css-1hzx4r0').click();
        cy.get('[data-automation="member-checkout-button"]').click();
        cy.wait(3000);
        cy.get('.section-header-main').contains('1. Envío');
        cy.get('#Shipping_FirstName').type("lalala");
        cy.get('#Shipping_LastName').type("lalala");
        cy.get('#Shipping_Address1').type("lalala");
        cy.get('#Shipping_PostCode').type("67124");
        cy.get('#Shipping_Address3').type("lalala");
        cy.get('#Shipping_Territory').type("lalala");
        cy.get('#Shipping_phonenumber').type("8182838485");
        cy.get('#shipping_Email').type("ja.s@gmail.com");
        cy.get('[type="checkbox"]').eq(2).check({ force: true }).should('be.checked') ;
        cy.get('#shippingSubmit').contains('Continuar a facturación').click();
        cy.get('#billingSubmit').click();
        cy.wait(10000);
        cy.iframe('astropayPaymentFrame').find('[placeholder="Nombre"]').type("lalala");
      });
      // it("Should enter the user data", function() {
      //   cy.wait(10000);
      // });
      // it("Log In", function() {
      //   cy.visit(url);
      //   cy.get('.g72-menu').click();
      //   cy.get('.vertical-menu > :nth-child(1) > .ncss-brand').click();
      //   cy.get('input[type="email"]').type('apecast.tech@gmail.com');
      //   cy.get('input[type="password"]').type('8Eikn_777');
      //   cy.get('input[type=button]').click();
      // });
    });