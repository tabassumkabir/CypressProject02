require('cypress-xpath')
describe('Checkbox',()=>{

    it('Verify checkboxes',()=>{

        cy.visit("https://demoqa.com/checkbox")

        //click on plus
        cy.get("button[title='Expand all']").click()


        //check Home
        cy.get("#tree-node-home").check({force: true})

        //uncheck commands
        cy.get("#tree-node-commands").uncheck({force: true})
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })