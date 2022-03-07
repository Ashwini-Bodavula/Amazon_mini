/// <reference types="Cypress" />
import Amazon_homepage from '../Pageobjects/Amazon_homepage'
import Amazon_DeliveryPage from '../Pageobjects/Amazon_DeliveryPage'
describe('DeliveryPage',function()
{
    before(function()
    {
        cy.fixture('Amazon').then(function(data)
        {
            this.data=data
        })
    })
    
    it('DeliveryPage',function()
    {
        const Amazon_Homepage = new Amazon_homepage()
        const Amazon_deliveryPage = new Amazon_DeliveryPage
        //Entering URL
        cy.visit(Cypress.env('URL'))
        
        //Loggin into site
        cy.login (Cypress.env('emailid'),Cypress.env('Password')) 
       Amazon_Homepage.getAccountslists().trigger('mouseover')
      Amazon_Homepage.getAccountslists().click()
      Amazon_deliveryPage.getEditAddress().click()
      Amazon_deliveryPage.getAddAddress().click()
      Amazon_deliveryPage.getAddFullname().type(this.data.name)
      Amazon_deliveryPage.getAddmobilenumber().type(this.data.num)
      Amazon_deliveryPage.getAddressdetails().type(this.data.address)
      Amazon_deliveryPage.getAddPincode().type(this.data.pincode)
      Amazon_deliveryPage.getAddcity().type(this.data.city)
      Amazon_deliveryPage.getselectstate().click()
      Amazon_deliveryPage.getdefaultaddress().check()
      Amazon_deliveryPage.getAddaddressbtn().click()
      Amazon_deliveryPage.getDeleteAddress().click()
      Amazon_deliveryPage.getConfirmdelete()
      Amazon_deliveryPage.getconfirmYes().click({force:true})
        
    })
})
    
