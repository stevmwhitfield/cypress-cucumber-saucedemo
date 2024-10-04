/// <reference types="cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/HomePage';

const homePage = new HomePage();

Given('I visit the home page', () => {
    homePage.visit();
});

When('I login as a standard user', () => {
    homePage.login('standard_user', 'secret_sauce');
});

When('I login as a locked out user', () => {
    homePage.login('locked_out_user', 'secret_sauce');
});

When('I login as a problem user', () => {
    homePage.login('problem_user', 'secret_sauce');
});

When(
    'I login with invalid username {string} and password {string}',
    (username, password) => {
        homePage.login(username, password);
    },
);

Then('I should see the logo', () => {
    homePage.getLogo().contains('Swag Labs');
});

Then('I should see the login container', () => {
    homePage.getLoginContainer().should('be.visible');
});

Then('I should see a locked out message', () => {
    homePage
        .getError()
        .contains('Epic sadface: Sorry, this user has been locked out.');
});

Then('I should see an error {string}', (message) => {
    homePage.getError().contains(message);
});
