///<reference types="cypress" />

require('cypress-xpath')


class checkout{
    elements = {
        itemcheck: () => cy.get(".btn-inverse").should("be.visible"),
        productcheck: () => cy.get('.img-thumbnail').should("be.visible"),
        Checkoutclick: () => cy.xpath("//strong[contains(.,'Checkout')]").should("be.visible"),
        buttoncheck: () => cy.xpath("//a[@class='btn btn-primary']").should("be.visible"),
        addtoCart: () => cy.xpath("//button[contains(.,'Add to Cart')]").should("be.visible").wait(1500),
        itemadded: () => cy.get(".alert").should("be.visible").log("Item added suscessfuly")

    }
    cartcheck(){
        this.elements.itemcheck().click();
    }

    productcart(){
        this.elements.productcheck();
    }

    checkclick(){
        this.elements.Checkoutclick().click();
    
    }

    checkoutbutton(){
        this.elements.buttoncheck().scrollIntoView().click();
    
    }

    itemadd(){
        this.elements.itemadded();
    
    }



}

module.exports = new checkout();