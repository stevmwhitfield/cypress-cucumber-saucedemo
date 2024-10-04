/// <reference types="cypress" />

import './commands';

// Issue - service workers prevent page load event from firing
// Fix - disable service workers for non-chromium browsers / config handles chromium fix
beforeEach(() => {
    cy.window().then((win) => {
        if (win.navigator.serviceWorker && !win.chrome) {
            win.navigator.serviceWorker
                .getRegistrations()
                .then((registrations) => {
                    registrations.forEach((registration) => {
                        registration.unregister();
                    });
                });
        }
    });
});
