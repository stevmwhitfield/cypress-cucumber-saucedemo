/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../page_objects/InventoryPage';
import CartPage from '../page_objects/CartPage';

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

When('I add a product to the cart', () => {
    inventoryPage.getAddToCartButton().click();
});

When('I remove the product from the cart', () => {
    inventoryPage.getRemoveFromCartButton().click();
});

When('I click the cart button', () => {
    inventoryPage.getCartLink().click();
});

Then('I should see a cart badge with the number of products', () => {
    inventoryPage.getCartBadge().should('be.visible');
});

Then('I should see a button to remove the product', () => {
    inventoryPage.getRemoveFromCartButton().should('be.visible');
});

Then('I should not see the cart badge', () => {
    inventoryPage.getCartBadge().should('not.exist');
});

Then('I should see a button to add the product', () => {
    inventoryPage.getAddToCartButton().should('be.visible');
});

Then('I should visit the cart page', () => {
    cartPage.getUrl().should('include', '/cart');
});

Then('I should see the product details', () => {
    cartPage.getCartItem().should('be.visible');
    cartPage
        .getCartItem()
        .first()
        .within(() => {
            cy.get('[data-test="item-quantity"]').should('not.be.empty');
            cy.get('[data-test="inventory-item-name"]').should('not.be.empty');
            cy.get('[data-test="inventory-item-desc"]').should('not.be.empty');
            cy.get('[data-test="inventory-item-price"]').should('not.be.empty');
        });
});
