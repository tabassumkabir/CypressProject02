describe('Make appointment',()=>{

    beforeEach('Login',()=>{

       cy.login("John Doe","ThisIsNotAPassword")


    })

    it('Make appointment',()=>{
        cy.visit("https://katalon-demo-cura.herokuapp.com/")

        //select facility
        cy.get("#combo_facility").select("Hongkong CURA Healthcare Center")

        //check checkbox
        cy.get("#chk_hospotal_readmission").check()

        //select healthcare program
        cy.get("#radio_program_medicaid").click()

        //select calender
        cy.get(".glyphicon.glyphicon-calendar").click()

        //select date
        cy.get("tbody tr:nth-child(2) td:nth-child(1)").click()
        

        //click book appointment 
        cy.get("#btn-book-appointment").click()

        //verify confirmation message
        cy.xpath("//div[@class='col-xs-12 text-center']//h2").should('have.text','Appointment Confirmation')

    })

    it('Check history',()=>{

        cy.visit("https://katalon-demo-cura.herokuapp.com/")

        //click on burger menu
        cy.get("#menu-toggle").click()

        //click on history 
        cy.get("a[href='history.php#history']").click()

        //verify history column 
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','History')
    })

    it('Check profile',()=>{

        cy.visit("https://katalon-demo-cura.herokuapp.com/")

        //click on burger menu
        cy.get("#menu-toggle").click()

        //click on profile
        cy.get("a[href='profile.php#profile']").click()

    })

    it('Logout',()=>{

        cy.visit("https://katalon-demo-cura.herokuapp.com/")

        //click on burger menu
        cy.get("#menu-toggle").click()

        //click on logout 
        cy.get("a[href='authenticate.php?logout']").click()
    })

})