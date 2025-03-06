import { mount } from "cypress-lit";
import "@cypress/code-coverage/support";
import "cypress-file-upload";

Cypress.Commands.add("mount", mount);
