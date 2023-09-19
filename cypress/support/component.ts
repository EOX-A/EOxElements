import { mount } from "cypress-lit";

type mount = typeof mount;

Cypress.Commands.add("mount", mount);
