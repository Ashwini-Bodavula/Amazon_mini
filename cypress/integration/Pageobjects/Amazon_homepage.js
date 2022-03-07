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
    //All dropdown
    getAlldrop()
    {
        return cy.get("#searchDropdownBox")
    }
    getsearch()
    {
       return cy.get("#twotabsearchtextbox")
    }
    getsearchsub()
    {
        return cy.get("#nav-search-submit-button")
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
        return cy.get('#sc-buy-box-ptc-button')
    }
    getsideproceed()
    {
        return cy.get('#attach-sidesheet-checkout-button')
    }
    getsignintext()
    {
        return cy.get("h1.a-spacing-small")
    }
    getdeliveryaddress()
    {
        return cy.get('.a-button-inner > .a-button-input')
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
    //cart
    getcart()
    {
        return cy.get(".nav-cart-icon")
    }
    getempcarttext()
    {
        return cy.get("#sc-active-cart ")
    }
    //signOut
    getSignedout()
    {
        return cy.get("#nav-item-signout")
    }
    //your Account
    getyourAccounts()
    {
        return cy.get("#nav-al-your-account")
    }
    //customer service page
    getCustomerservice()
    {
        return cy.get("ul.hmenu.hmenu-visible > li:nth-child(30)")
    }
    getcustomerpagetext()
    {
        return cy.get(".a-section.ss-landing-container > h1")
    }
    getServiceandSupport()
    {
        return cy.get(".a-spacing-none").contains("Digital Services and Device Support")
    }
    getManagedevice()
    {
        return cy.get("#digitalcontent")
    }
    getPrivacysetting()
    {
        return cy.get("#privacy_settings_landing_page")
    }
    //productpage filter checkbox
    get
}
export default Amazon_homepage;