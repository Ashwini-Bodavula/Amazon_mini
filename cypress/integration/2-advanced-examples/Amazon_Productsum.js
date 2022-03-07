// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon_productsum',function()
{ 
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('productsum',function()
    {
        var sum=0
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

        Amazon_Homepage.getcart().click({force:true})
        cy.wait(3000)
        cy.get('.a-span2 > .a-spacing-mini > .a-size-medium').each(($el,index,$list)=>
      {
        const amount=$el.text()
        var res= amount.split(" ")
        cy.log(Number(res))
       sum= Number(sum)+Number(res)

}).then(function()
{
    cy.log(sum)
})
cy.get('#sc-subtotal-amount-activecart').then(function(element)
{
    const amt=element.text()
    cy.log(amt)
    var result= amt.split(" ")
   var total= result
   expect(Number(total)).to.equal(sum)

})

    })
})
    
