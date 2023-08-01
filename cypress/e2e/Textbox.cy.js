///<reference types="cypress"/>

describe('Textbox',()=>{


    

    it('Verify textboxes',()=>{

        //visit url
        cy.visit("https://demoqa.com/text-box")

       //type full name 
       cy.get("#userName").type("someone")

       //type email
       cy.get("#userEmail").type("someone@gmail.com")

       //type address 
       cy.get("#currentAddress").type("someaddress")

       //type permanent address
       cy.get("#permanentAddress").type("permanent")

       //click on submit
       cy.get("#submit").click()
    })
    
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })