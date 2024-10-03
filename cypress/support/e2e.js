import './commands';

// Service worker causes page load event to fail
beforeEach(() => {
    cy.window().then((win) => {
        if (win.navigator.serviceWorker) {
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
