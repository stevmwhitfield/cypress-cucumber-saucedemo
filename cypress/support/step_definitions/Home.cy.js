/// <reference types="cypress" />

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/HomePage';

const homePage = new HomePage();

Given('I visit the home page', () => {
    homePage.visit();
});

Then('I should see the logo', () => {
    homePage.getLogo().contains('Swag Labs');
});
