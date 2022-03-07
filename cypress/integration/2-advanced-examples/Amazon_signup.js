// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon signup',function(){
    before(function(){
        cy.fixture('Amazon').then(function(data){
            this.data=data
        })
      })
    
    it('signup',function(){
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        //click signin
        Amazon_Homepage.getAccountslists().click()
        Amazon_Homepage.getcreateAcc().click()   
        Amazon_Homepage.getCAccountName().type(this.data.name)
        Amazon_Homepage.getmobilenum().type(this.data.num)
        Amazon_Homepage.getpassword().type(Cypress.env('pwd'))
       // Amazon_Homepage.getpasswordcon().type(this.data.pwd)
        Amazon_Homepage.getcontinue().click()
//write code for alert msg
    })
    
})