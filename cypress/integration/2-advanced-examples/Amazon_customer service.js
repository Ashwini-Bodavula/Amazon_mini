/// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon_customerService case',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('customerservice',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
        //Loggin into site
        cy.login (Cypress.env('emailid'),Cypress.env('Password')) 
        //select Left All section
        Amazon_Homepage.getAll().click()
         
        // select specific section
        Amazon_Homepage.getCustomerservice().click()
        Amazon_Homepage.getcustomerpagetext().should('contain.text','What can we help you with')
        Amazon_Homepage.getServiceandSupport().click()
        Amazon_Homepage.getManagedevice().click()
        Amazon_Homepage.getPrivacysetting().click()
        
    })
})
    
