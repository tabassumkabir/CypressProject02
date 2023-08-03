describe('Handling Web tables',()=>{

    it('Check tables',()=>{

        cy.visit("https://demoqa.com/webtables")

        //check columns
        cy.get(".rt-tr").should('have.length','11')

        //check rows 
        cy.get(".rt-tbody>div").should('have.length','10')

        //add another cell 
        cy.get("#addNewRecordButton").click()
        
        //fill up the fields 
        cy.get("#firstName").type("abc")
        cy.get("#lastName").type("123")
        cy.get("#userEmail").type("abc123@gmail.com")
        cy.get("#age").type("26")
        cy.get("#salary").type("100000")
        cy.get("#department").type("Software Development")
        cy.get("#submit").click()

        //delete a cell
        cy.get("#delete-record-4").click()

        //search on search box
        cy.get("#searchBox").type("cierra")
        
        //click on search button
        cy.get("#basic-addon2").click()

        //verify  by assertion
        cy.get("cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')").should('have.text',"Cierra")
    })


    
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })