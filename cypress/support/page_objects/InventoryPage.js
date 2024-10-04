/// <reference types="cypress" />

export default class InventoryPage {
    visit() {
        cy.visit('/inventory');
    }

    getUrl() {
        return cy.url();
    }

    getTitle() {
        return cy.get('[data-test="title"]');
    }

    getProductImages() {
        return cy.get('img.inventory_item_img');
    }

    getProducts() {
        return cy.get('[data-test="inventory-item"]');
    }

    getSortDropdown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    getAddToCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    getRemoveFromCartButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }

    getCartLink() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    getCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }
}
