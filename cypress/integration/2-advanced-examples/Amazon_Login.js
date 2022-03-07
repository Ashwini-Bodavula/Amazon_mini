// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon first case',function(){
    before(function(){
        cy.fixture('Amazon').then(function(data){
            this.data=data
        })
      })
    
    it('Login',function(){
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        //click signin
        
        Amazon_Homepage.getSignin().click()
        Amazon_Homepage.getusername().type(Cypress.env('emailid'))
        Amazon_Homepage.getcontinue().click()
        Amazon_Homepage.getpassword().type(Cypress.env('Password'),{log:false})
        Amazon_Homepage.getsubmitsigin().click()
        Amazon_Homepage.getsignedusername().should("have.text","Hello, ashwini")
        Amazon_Homepage.getSignin().trigger('mouseover').invoke('show')
        Amazon_Homepage.getSignedout().click()   
        Amazon_Homepage.getsignintext().should('contain.text','Sign-In')
    })
    
})
