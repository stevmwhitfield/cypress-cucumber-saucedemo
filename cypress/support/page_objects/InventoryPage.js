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
}
