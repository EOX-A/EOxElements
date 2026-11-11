import { html } from "lit";
import ActivityStory from "../../stories/activity.js";
import { render as renderVanilla } from "../../../../.storybook/custom-panels/methods/vanilla.js";
import { render as renderReact } from "../../../../.storybook/custom-panels/methods/react.js";
import { render as renderVue } from "../../../../.storybook/custom-panels/methods/vue.js";
import { render as renderSvelte } from "../../../../.storybook/custom-panels/methods/svelte.js";
import { parse } from "@babel/parser";
// Minimal argTypes defining properties and events without requiring generated manifest in CI.
const exportContext = {
  component: "eox-jsonform",
  args: ActivityStory.args,
  argTypes: {
    schema: { table: { category: "properties" } },
    ready: { table: { category: "events" } },
  },
};

/**
 * @typedef {{ event: string, isUser?: boolean, element?: string, action?: string,
 * value?: { title: string }, payload?: { title: string } }} EventEntry
 */

/**
 * @param {string} text - The story's line-delimited event log.
 * @returns {EventEntry[]} The parsed entries.
 */
const entries = (text) =>
  text.trim()
    ? text
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line))
    : [];

/** Mounts the actual Storybook render function, including its controls and listeners. */
const mountActivityStory = () => {
  cy.mount(ActivityStory.render(ActivityStory.args));
  cy.get("[data-programmatic-update]").should("not.be.disabled");
};

/** Initialization and host-driven value assignments keep functional events without activity. */
export function programmaticStoryTest() {
  mountActivityStory();
  cy.get("[data-activity-log]").should(($log) => {
    expect(
      entries($log.text()).filter((entry) => entry.event === "eox:activity"),
    ).to.have.length(0);
  });
  cy.get("[data-clear-log]").click();
  cy.get("[data-programmatic-update]").click();
  cy.get("[data-activity-log]").should(($log) => {
    const log = entries($log.text());
    expect(
      log.some(
        (entry) =>
          entry.event === "change" &&
          entry.value.title === "Programmatic update 1" &&
          entry.isUser === false,
      ),
    ).to.equal(true);
    expect(
      log.filter((entry) => entry.event === "eox:activity"),
    ).to.have.length(0);
  });
  cy.get("eox-jsonform")
    .shadow()
    .find("input[name='root[title]']")
    .should("have.value", "Programmatic update 1");
}

/** Editing the demo form produces attributed activity; a later property assignment does not. */
export function userStoryTest() {
  mountActivityStory();
  assertUserAndProgrammaticEvents();
}

/** Realistic human typing with keystroke delays reliably emits activity. */
export function humanTypingStoryTest() {
  mountActivityStory();
  cy.get("[data-clear-log]").click();
  cy.get("eox-jsonform").shadow().find("input[name='root[title]']").clear();
  cy.get("eox-jsonform")
    .shadow()
    .find("input[name='root[title]']")
    .type("I am an e", { delay: 40 });
  cy.get("[data-activity-log]").should(($log) => {
    const log = entries($log.text());
    expect(
      log.some((entry) => entry.event === "change" && entry.isUser === true),
    ).to.equal(true);
    expect(
      log.some(
        (entry) =>
          entry.event === "eox:activity" &&
          entry.element === "eox-jsonform" &&
          entry.action === "change" &&
          entry.payload.title === "I am an e",
      ),
    ).to.equal(true);
  });
}

/** Exercise the same attribution behavior for either the live or exported demo. */
function assertUserAndProgrammaticEvents() {
  cy.get("[data-clear-log]").click();
  cy.get("eox-jsonform")
    .shadow()
    .find("input[name='root[title]']")
    .type(" edited");
  cy.get("[data-activity-log]").should(($log) => {
    const log = entries($log.text());
    expect(
      log.some((entry) => entry.event === "change" && entry.isUser === true),
    ).to.equal(true);
    expect(
      log.some(
        (entry) =>
          entry.event === "eox:activity" &&
          entry.element === "eox-jsonform" &&
          entry.action === "change" &&
          entry.payload.title === "Initial title edited",
      ),
    ).to.equal(true);
  });
  cy.get("[data-clear-log]").click();
  cy.get("[data-programmatic-update]").click();
  cy.get("[data-activity-log]").should(($log) => {
    const log = entries($log.text());
    expect(
      log.some(
        (entry) =>
          entry.event === "change" &&
          entry.value.title === "Programmatic update 1" &&
          entry.isUser === false,
      ),
    ).to.equal(true);
    expect(
      log.filter((entry) => entry.event === "eox:activity"),
    ).to.have.length(0);
  });
}

/** All four actual exporters must retain the UI and the self-contained parent setup. */
export function frameworkExportsTest() {
  cy.then(async () => {
    for (const [language, render] of Object.entries({
      vanilla: renderVanilla,
      react: renderReact,
      vue: renderVue,
      svelte: renderSvelte,
    })) {
      const source = await render(exportContext);
      expect(source, language).to.include("data-activity-demo");
      expect(source, language).to.include("data-programmatic-update");
      expect(source, language).to.include("data-clear-log");
      expect(source, language).to.include("data-activity-log");
      expect(source, language).to.include("Programmatic update");
      expect(source, language).to.match(
        /host\.addEventListener\(["']change["'], record\)/,
      );
      expect(source, language).to.match(
        /host\.addEventListener\(["']eox:activity["'], record\)/,
      );
      expect(source, language).to.include("isUser: notification.isUser");
      expect(source, language).not.to.include("storyTemplateBefore:");
      expect(source, language).not.to.include("storyTemplateAfter:");
      if (language === "react") {
        expect(source).to.include('el.addEventListener("ready", handleReady)');
        expect(source).to.include(
          'el.removeEventListener("ready", handleReady)',
        );
        // Validate the actual generated JSX, not the live Lit template.
        parse(source, { sourceType: "module", plugins: ["jsx"] });
      } else if (language === "vue") {
        const document = new DOMParser().parseFromString(source, "text/html");
        const handler = document
          .querySelector("template")
          .content.querySelector("eox-jsonform")
          .getAttribute("@ready");
        // Attribute quoting must survive HTML parsing before Vue compiles it.
        expect(handler).to.match(
          /host\.addEventListener\(["']eox:activity["'], record\)/,
        );
        parse(`const ready = ${handler}`, { sourceType: "module" });
      } else if (language === "svelte") {
        expect(source).to.include("on:ready=");
        parse(source.match(/<script>([\s\S]*?)<\/script>/)[1], {
          sourceType: "module",
        });
      } else {
        expect(source).to.include('eoxJsonform.addEventListener("ready",');
        parse(source.match(/<script type="module">([\s\S]*?)<\/script>/)[1], {
          sourceType: "module",
        });
      }
    }
  });
}

/** Execute the actual vanilla/MCP snippet, removing only its already-loaded package import. */
export function vanillaExportStoryTest() {
  cy.then(async () => {
    const source = await renderVanilla(exportContext);
    const document = new DOMParser().parseFromString(source, "text/html");
    const script = document.querySelector("script");
    const setup = script.textContent.replace(/^\s*import\s+"[^"]+";\s*/m, "");
    script.remove();
    const markup = document.body.innerHTML;
    cy.mount(html`<article data-export-mount></article>`);
    cy.document().then((document) => {
      // Insert markup and run its module body in the same task, before Lit updates.
      document.querySelector("[data-export-mount]").innerHTML = markup;
      // The snippet is trusted repository output; no story functions are injected.
      new Function("document", setup)(document);
    });
  });
  cy.get("[data-programmatic-update]").should("not.be.disabled");
  cy.get("[data-activity-log]").should(($log) => {
    const log = entries($log.text());
    expect(
      log.some((entry) => entry.event === "change" && entry.isUser === false),
    ).to.equal(true);
    expect(
      log.filter((entry) => entry.event === "eox:activity"),
    ).to.have.length(0);
  });
  assertUserAndProgrammaticEvents();
}
