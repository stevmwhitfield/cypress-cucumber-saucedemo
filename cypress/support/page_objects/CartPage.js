/// <reference types="cypress" />

export default class CartPage {
    visit() {
        cy.visit('/cart');
    }

    getUrl() {
        return cy.url();
    }

    getCartItem() {
        return cy.get('[data-test="inventory-item"]');
    }
}
