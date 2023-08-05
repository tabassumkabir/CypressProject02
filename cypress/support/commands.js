// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress"/>

///<reference types="cypress-xpath"/>

Cypress.Commands.add('login',(username,password)=>{

    cy.session([username,password],()=>{

    //visit url
    cy.visit("https://katalon-demo-cura.herokuapp.com/")

    //click on make appointment 
    cy.get("#btn-make-appointment").click()

    //username
    cy.get("#txt-username").type(username)
    //password
    cy.get("#txt-password").type(password)
    //click on login
    cy.get("#btn-login").click()

    cy.wait(5000)



    })


    

})
