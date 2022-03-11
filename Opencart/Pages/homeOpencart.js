///<reference types="cypress" />

require('cypress-xpath')


class homeOpencart{
    elements = {
        PageTitle: () => cy.xpath("//a[contains(text(),'Your Store')]"),
        productnameImput: () => cy.xpath("//div[@id='search']").should("be.visible"),
        searchBtn: () => cy.get(".btn-default").should("be.visible"),
        pageDown: () => cy.get(".price"),
        addtoCart: () => cy.xpath("//button[contains(.,'Add to Cart')]").should("be.visible").wait(1500),
        itemadded: () => cy.get(".alert").should("be.visible").log("Item added suscessfuly")

    }
    typeProductname(productname){
        this.elements.productnameImput().type(productname);
    }

    clicksearch(){
        this.elements.searchBtn().click();
    }

    scrollDown(){
        this.elements.pageDown().scrollIntoView();
    
    }

    additem(){
        this.elements.addtoCart().click();
    
    }

    itemadd(){
        this.elements.itemadded();
    
    }



}

module.exports = new homeOpencart();