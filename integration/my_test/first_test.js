/// <reference types="Cypress" />


context('Actions', () => {
    beforeEach(() => {

        cy.eyesOpen({
            appName: 'Cross Browser Testing',
            browser: [
                { width: 800, height: 600, name: 'firefox' },
                { width: 1024, height: 768, name: 'chrome' }
              ]
        });
      cy.visit('https://the-internet.herokuapp.com/')
    })

    it('A/B Test',function(){
   
        cy.contains('A/B Testing').click()
    
        cy.contains('A/B Test')
    
        cy.url().should('include','/abtest')
    
    })

    it('Add/Remove Elements',function(){

        cy.contains('Add/Remove Elements').click()

        for(var x=1;x<5;x++){
            cy.get('[onclick="addElement()"]').click()
         
        }
    
    })




})//final



it('Basic Auth',function(){
    cy.contains('Basic Auth').click()
    const stub = cy.stub()

    cy.on('window:alert', stub)
    


})
