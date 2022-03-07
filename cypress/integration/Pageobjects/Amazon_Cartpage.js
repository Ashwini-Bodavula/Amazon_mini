class Amazon_homepage
{  
    getcreateAcc()
    {
        return cy.get("#createAccountSubmit")
    }
    getCAccountName()
    {
        return cy.get('#ap_customer_name')
    }
    getmobilenum()
    {
        return cy.get('#ap_phone_number')
    }
    getpasswordcon()
    {
        return cy.get('#ap_password_check')
    }
    getSignin()
    {
        return cy.get('div.nav-line-1-container')
    }
    getusername()
    {
        return cy.get('#ap_email')
    }
    getcontinue()
    {
        return cy.get("#continue")
    }
    getpassword()
    {
        return cy.get('#ap_password')
    }
    getsubmitsigin()
    {
        return cy.get('#signInSubmit')  
    }
    getsignedusername()
    {
        return cy.get("#nav-link-accountList-nav-line-1")
    }
    getsearch()
    {
       return cy.get("#twotabsearchtextbox")
    }

    gettodaysdeal()
    {
        return cy.get("#nav-xshop > a:nth-child(5)")
    }
    getAll()
    {
        return cy.get("#nav-hamburger-menu")
    }
    getclearance()
    {
        return cy.get(".hmenu-visible > :nth-child(26)")
    }

    getproceed()
    {
        return cy.get("cy.contains('Proceed to Buy')")
    }
    getsignintext()
    {
        return cy.get("h1.a-spacing-small")
    }
    getdeliveryaddress()
    {
        return cy.get("a-declarative a-button-text ")
    }
    getAccountslists()
    {
        return cy.get("#nav-link-accountList-nav-line-1")
    }
    getwishlist()
    {
        return cy.get("#nav-al-wishlist")
    }
    getsignupstart()
    {
        return cy.get("#nav-flyout-ya-newCust >a")
    }
    getAddtocart(){
        return cy.get('#add-to-cart-button')
    }
    getAddwishlist()
    {
        return cy.get("#wishlistButtonStack")
    }
    getsizeselect(){
        return cy.get("select[name=dropdown_selected_size_name]")
    }
    getcart()
    {
        return cy.get("nav-cart-icon nav-sprite")
    }
    getSignedout()
    {
        return cy.get("#nav-item-signout")
    }
}
export default Amazon_homepage;