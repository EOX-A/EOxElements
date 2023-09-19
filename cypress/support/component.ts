import { mount } from "cypress-lit";

type mount = typeof mount;

Cypress.Commands.add("mount", mount);

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
