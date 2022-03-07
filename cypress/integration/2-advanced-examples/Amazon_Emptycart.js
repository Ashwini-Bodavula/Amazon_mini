// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon_Emptycart',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('Emptycart',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
     
     
       //select cart icon
        Amazon_Homepage.getcart().click({force:true})
        Amazon_Homepage.getempcarttext().should('contain.text', 'Your Amazon Basket is empty')
        
    })
})
    
