/// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
describe('Amazon searchAll',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('searchAll',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
        //Loggin into site
        cy.login (Cypress.env('emailid'),Cypress.env('Password')) 
        //select dropdowmn All section
        Amazon_Homepage.getAlldrop().select("Office Products",{force:true})
        Amazon_Homepage.getsearch().type(this.data.officesupply) 
        Amazon_Homepage.getsearchsub().click()
        Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
        })
        cy.Selectvideo(this.data.videoname)
    
    })
})
    
