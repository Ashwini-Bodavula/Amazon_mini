// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon authrised customer',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('authselectab',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
        //Loggin into site
        cy.login (Cypress.env('emailid'),Cypress.env('Password')) 
        //select Left All section
        Amazon_Homepage.getAll().click()
         
        // select specific section
        Amazon_Homepage.getclearance().click()
        cy.selectsection(this.data.clearancesec, this.data.itemname,this.data.size)
        //size select
        //Amazon_Homepage.getsizeselect().select(this.data.size)

        //Amazon_Homepage.getcart().click()
        //Procced to checkout
        
        Amazon_Homepage.getproceed().click({force:true})
       
        
    })
})
    
