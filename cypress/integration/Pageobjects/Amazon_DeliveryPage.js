class Amazon_DeliveryPage
{  
   getEditAddress()
   {
       return cy.get(".a-spacing-none").contains("Your Addresses")
   }
   getAddAddress()
   {
       return cy.get("#ya-myab-plus-address-icon")
   }
   getAddFullname()
   {
       return cy.get("#address-ui-widgets-enterAddressFullName")
   }
   getAddmobilenumber()
   {
       return cy.get("#address-ui-widgets-enterAddressPhoneNumber")
   }
   getAddPincode()
   {
       return cy.get("#address-ui-widgets-enterAddressPostalCode")
   }
   getAddressdetails()
   {
       return cy.get("#address-ui-widgets-enterAddressLine1")
   }
   getAddcity()
   {
       return cy.get("#address-ui-widgets-enterAddressCity")
   }
   getselectstate()
   {
       return cy.get("#address-ui-widgets-enterAddressStateOrRegion")
   }
   getdefaultaddress()
   {
       return cy.get("#address-ui-widgets-use-as-my-default")
   }
   getAddaddressbtn()
   {
       return cy.get(".a-button-input")
   }
   getDeleteAddress()
   {
       return cy.get('#ya-myab-address-delete-btn-0')
   }
   getConfirmdelete()
   {
        return cy.get('#ya-myab-address-delete-btn-0')
   }
   getconfirmYes()
   {
       return cy.get("#deleteAddressModal-1-submit-btn-announce")
   }
}
export default Amazon_DeliveryPage;