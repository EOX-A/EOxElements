import { mount } from "cypress-lit";
import "@cypress/code-coverage/support";
type mount = typeof mount;

Cypress.Commands.add("mount", mount);
