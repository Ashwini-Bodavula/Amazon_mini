// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (emailid, Password) =>
{ 
    cy.get('div.nav-line-1-container').click()
    cy.get('#ap_email').type(emailid)
    cy.get("#continue").click()
    cy.get('#ap_password').type((Password), {log:false})
    cy.get('#signInSubmit').click()
 })
Cypress.Commands.add('selectproduct',(productName)=>{
    cy.get('div.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW').as('deal').each(($el,index,$list)=>{
       const txt= $el.text()
         if(txt.includes(productName))
         {
             
          cy.get('@deal').eq(index).click().should('have.text','Samsung Galaxy M32 5G')
             
         }
    })

})
Cypress.Commands.add('Selectvideo',(videoname)=>{
  //cy.get('#p_89\/SAVYA\ HOME > .a-list-item > .a-link-normal > .a-checkbox > label').check()
  cy.get('.a-size-mini').as('title').each(($el,index,$list)=>{
     const txt= $el.text()
       if(txt.includes(videoname))
       {
           
        cy.get('@title').eq(index).should('have.text','Savya Home® APEX Chairs™ Apollo Chrome Base HIGH Back Office CHAIR2  ').find('a').invoke('removeAttr','target').click()
        cy.get('.videoThumbnail').click()
        cy.get("div.a-modal-scroller.a-declarative").click() 
       }
  })

})
Cypress.Commands.add('selectdealcategory',(categoryname)=>{
    cy.get('span.GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h').each(($el,index,$list)=>{
       const txt= $el.text()
         if(txt.endsWith(categoryname)){
             
             cy.get("span.GridPresets-module__gridPresetImageSection_2p68sRHExZZwCJorBe2_N3").eq(index).click()
             
         }
    })

})
Cypress.Commands.add('selectsection',(clearancesec,itemname,size)=>
{

  cy.get(".a-list-item").as('list').each(($el,index,$list)=>
  {
    const name=$el.text()
   
    if(name.includes(clearancesec))
    {
      cy.get("@list").eq(index).click()
      //cy.get('#p_89\\/Max > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check()
      cy.get('.a-size-base-plus').as('prod').each(($el,index,$list)=>
      {
        const item=$el.text()
         if(item.includes(itemname))
         {
          cy.get('@prod').eq(index).parent().invoke('removeAttr','target').click()
          cy.get('#native_dropdown_selected_size_name').select(size)
            cy.wait(3000)
          cy.get('#add-to-cart-button').click()
          
          //cy.go('back')
         
        }
     })
   }
  })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
