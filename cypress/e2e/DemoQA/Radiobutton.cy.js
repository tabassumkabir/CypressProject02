describe('Radiobutton',()=>{

    it('Verify radiobutton',()=>{

        cy.visit("https://demoqa.com/radio-button")

        //check one of the option
        cy.get("label[for='impressiveRadio']").click()

        //verify text
        cy.get(".mt-3").should('have.text','You have selected Impressive')
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })