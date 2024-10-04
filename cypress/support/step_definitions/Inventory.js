/// <reference types="cypress" />

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../page_objects/InventoryPage';

const inventoryPage = new InventoryPage();

When('I select the {string} sort option', (sort) => {
    inventoryPage.getSortDropdown().select(sort);
});

Then('I should see the inventory page', () => {
    inventoryPage.getUrl().should('include', '/inventory');
    inventoryPage.getTitle().contains('Products');
});

Then('I should see a list of products', () => {
    inventoryPage.getProducts().should('have.length', 6);
});

Then('the product images should be unique', () => {
    inventoryPage.getProductImages().then(($images) => {
        expect($images[0].getAttribute('src')).not.to.equal(
            $images[1].getAttribute('src'),
        );
    });
});

Then('the product images should be the same', () => {
    inventoryPage.getProductImages().then(($images) => {
        expect($images[0].getAttribute('src')).to.equal(
            $images[1].getAttribute('src'),
        );
    });
});

Then('I should see the product {string} first', (product) => {
    inventoryPage.getProducts().first().contains(product);
});

Then('I should see the product {string} second', (product) => {
    inventoryPage.getProducts().eq(1).contains(product);
});

Then('I should see the product {string} third', (product) => {
    inventoryPage.getProducts().eq(2).contains(product);
});
