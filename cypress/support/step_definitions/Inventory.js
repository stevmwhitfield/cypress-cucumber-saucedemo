/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../page_objects/InventoryPage';

const inventoryPage = new InventoryPage();

Then('I should see the inventory page', () => {
    inventoryPage.getUrl().should('include', '/inventory');
    inventoryPage.getTitle().contains('Products');
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
