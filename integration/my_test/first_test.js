/// <reference types="Cypress" />
//https://eyes.applitools.com/app/test-results/00000251823073736486/?accountId=kVePLF9c2Ueaz5yrgQaDDA~~

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

    afterEach(() => {
     //   cy.eyesCheckWindow('Contact Form Submission Results');
        // Close the active test
        cy.eyesClose();
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
        cy.url().should('include','add_remove_elements/')
    })

    it('Basic Auth',() => {
       cy.contains('Checkboxes').click()
       cy.contains(' checkbox 1').click()
    })

})//final