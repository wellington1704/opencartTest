import Checkout, { checkoutbutton } from "../../../Opencart/Pages/Checkout";
import homeOpencart from "../../../Opencart/Pages/homeOpencart";

describe('Open cart',() => {
    before(function() {
        cy.visit(Cypress.env("url"))
  
    });

    it ('search item', function()  {
        homeOpencart.elements.PageTitle().should('have.text','Your Store').then(()=>{
        homeOpencart.typeProductname('iphone');
        homeOpencart.clicksearch();
            
        })
    });

    it ('add item to shopping cart', function()  {
        homeOpencart.scrollDown();
        homeOpencart.additem();
        homeOpencart.itemadd();
            
        })

    it ('check out the item', function()  {
        Checkout.cartcheck(); 
        Checkout.checkclick();    
        Checkout.checkoutbutton();
    });

});