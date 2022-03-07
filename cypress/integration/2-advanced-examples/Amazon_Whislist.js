/// <reference types="Cypress" />


import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon Wishlist',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('wishlist',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
   
  
     Amazon_Homepage.getAccountslists().trigger('mouseover')
     Amazon_Homepage.getwishlist().click({force:true})

     Amazon_Homepage.gettodaysdeal().click({force:true}).should('have.text','Today\'s Deals')
         
     // select category
     cy.selectdealcategory(this.data.categoryname)
     //select product
     cy.selectproduct(this.data.productName)
     Amazon_Homepage.getAddwishlist().click()
     //Procced to checkout
     Amazon_Homepage.getsignintext().should('have.contain',"Sign-In")
    
     
    })

})

