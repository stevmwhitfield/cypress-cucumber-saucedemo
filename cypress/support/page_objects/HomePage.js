/// <reference types="cypress" />

export default class HomePage {
    visit() {
        cy.visit('/');
    }

    getLogo() {
        return cy.get('.login_logo');
    }
}
