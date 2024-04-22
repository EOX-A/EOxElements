import failOnConsoleError from "cypress-fail-on-console-error";

// failOnConsoleError();
// Cypress.on("window:before:load", (win) => {
//   cy.stub(win.console, "error").callsFake((msg) => {
//     console.log(msg);
//     cy.now("task", "error", msg);
//     throw new Error(msg);
//   });
// });
// let windowConsoleError;

// Cypress.on("window:before:load", (win) => {
//   windowConsoleError = cy.spy(win.console, "error");
// });

// afterEach(() => {
//   expect(windowConsoleError).to.not.be.called;
// });
