import { mount } from "cypress-lit";
import process from "process";
globalThis.process = process;

type mount = typeof mount;

Cypress.Commands.add("mount", mount);
