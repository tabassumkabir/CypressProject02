describe('Buttons',()=>{

    beforeEach('Visit url',()=>{

        cy.visit("https://demoqa.com/")

        //click on elements
        cy.get('.category-cards > :nth-child(1)').click()
        
        //click on button 
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    })

    it("Verify click",()=>{

        cy.wait(3000)

        //click on click me button 
        cy.xpath("//button[.='Click Me']").click()

        //verify by assertion
        cy.get("#dynamicClickMessage").should('have.text','You have done a dynamic click')


    })

    it("Verify right click",()=>{

        cy.wait(3000)

        //click on click me button 
        cy.xpath("//button[.='Right Click Me']").rightclick()

        cy.wait(3000)

        //verify by assertion
        cy.get("#rightClickMessage").should('have.text','You have done a right click')


    })

    it("Verify double click",()=>{

        cy.wait(3000)

        //click on click me button 
        cy.xpath("//button[.='Double Click Me']").dblclick()

        cy.wait(3000)

        //verfiy by assertion 
        cy.get('#doubleClickMessage').contains("You have done a double click")


    })




})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })