// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon unauthorised select tab',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('selectab',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
        //Loggin into site
  
        //select the tab and verify correct tab selected
        Amazon_Homepage.gettodaysdeal().click().should('have.text','Today\'s Deals')
         
        // select category
        cy.selectdealcategory(this.data.categoryname)
        //select product
        cy.selectproduct(this.data.productName)

        Amazon_Homepage.getAddtocart().click()
        //Procced to checkout
        Amazon_Homepage.getsideproceed().click()
        Amazon_Homepage.getsignintext().should('contains.text','Sign-In')
        
    })
})
    
