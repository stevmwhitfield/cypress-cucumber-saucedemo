/// <reference types="cypress" />

export default class HomePage {
    visit() {
        cy.visit('/');
    }

    getLogo() {
        return cy.get('.login_logo');
    }

    getLoginContainer() {
        return cy.get('[data-test="login-container"]');
    }

    getError() {
        return cy.get('[data-test="error"]');
    }

    login(username, password) {
        if (username) {
            cy.get('[data-test="username"]').type(username);
        }
        if (password) {
            cy.get('[data-test="password"]').type(password);
        }
        cy.get('[data-test="login-button"]').click();
    }
}
