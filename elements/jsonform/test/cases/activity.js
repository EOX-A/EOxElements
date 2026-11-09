import { html } from "lit";

const schema = {
  type: "object",
  properties: { title: { type: "string", default: "initial" } },
};

/** Wait for JSONEditor change notifications and interaction expiry. */
const settle = () =>
  cy.window().then(
    (window) =>
      new Cypress.Promise((resolve) => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => resolve());
        });
      }),
  );

/** Mount a ready form with an activity listener. */
const mountForm = (formSchema = schema) => {
  const activity = cy.stub().as("activity");
  cy.mount(
    html`<eox-jsonform
      .schema=${formSchema}
      @eox:activity=${activity}
    ></eox-jsonform>`,
  );
  cy.get("eox-jsonform").should(([element]) => {
    expect(
      /** @type {import("../../src/main").EOxJSONForm} */ (element).editor
        ?.ready,
    ).to.equal(true);
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
};

/** Programmatic changes must retain functional events without activity. */
export const programmaticActivityTest = () => {
  mountForm();
  cy.get("eox-jsonform").then(([element]) => {
    const form = /** @type {import("../../src/main").EOxJSONForm} */ (element);
    form.addEventListener("change", cy.stub().as("change"));
    form.value = { title: "property update" };
  });
  settle();
  cy.get("@change").should("have.been.called");
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform").then(([element]) => {
    /** @type {import("../../src/main").EOxJSONForm} */ (
      element
    ).editor.setValue({
      title: "editor update",
    });
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
};

/** An actual input edit must emit activity with the updated value. */
export const inputActivityTest = () => {
  mountForm();
  cy.get("eox-jsonform")
    .shadow()
    .find("input[name='root[title]']")
    .type(" edited");
  cy.get("@activity").should("have.been.called");
  cy.get("@activity")
    .its("lastCall.args.0.detail")
    .should("include", {
      element: "eox-jsonform",
      action: "change",
    })
    .its("payload.title")
    .should("equal", "initial edited");
};

/** No-op interactions must not attribute a subsequent editor update to a user. */
export const noOpActivityTest = () => {
  mountForm();
  cy.get("eox-jsonform").shadow().find("input[name='root[title]']").click();
  cy.get("eox-jsonform").then(([element]) => {
    /** @type {import("../../src/main").EOxJSONForm} */ (
      element
    ).editor.setValue({
      title: "after focus",
    });
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform")
    .shadow()
    .find("input[name='root[title]']")
    .trigger("input");
  settle();
  cy.get("@activity").should("not.have.been.called");
  // An input event that causes no editor change must also expire.
  cy.get("eox-jsonform").then(([element]) => {
    const form = /** @type {import("../../src/main").EOxJSONForm} */ (element);
    const input = document.createElement("input");
    form.renderRoot.querySelector("form").append(input);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.remove();
  });
  settle();
  cy.get("eox-jsonform").then(([element]) => {
    /** @type {import("../../src/main").EOxJSONForm} */ (
      element
    ).editor.setValue({
      title: "after no-op",
    });
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
};

/** Array controls must report one activity per mutation, including reordering. */
export const arrayActivityTest = () => {
  mountForm({
    type: "object",
    properties: {
      items: {
        type: "array",
        items: { type: "string" },
        default: ["first", "second"],
      },
    },
  });
  cy.get("eox-jsonform")
    .shadow()
    .find("[data-schemapath='root.items'] button.json-editor-btn-add")
    .filter(":visible")
    .first()
    .click();
  settle();
  cy.get("@activity").should("have.been.calledOnce");
  cy.get("eox-jsonform")
    .shadow()
    .find("button.json-editor-btn-movedown")
    .first()
    .click();
  settle();
  cy.get("@activity").should("have.been.calledTwice");
  cy.get("eox-jsonform")
    .shadow()
    .find("button.json-editor-btn-delete[data-i]")
    .filter(":visible")
    .first()
    .click();
  settle();
  cy.get("@activity").should("have.been.calledThrice");
};

/** Custom buttons must report mutations but not no-op clicks. */
export const customButtonActivityTest = () => {
  mountForm({
    ...schema,
    properties: {
      ...schema.properties,
      button: {
        format: "button",
        options: {
          button: {
            text: "Change title",
            action: () => {
              const form = /** @type {import("../../src/main").EOxJSONForm} */ (
                document.querySelector("eox-jsonform")
              );
              form.editor.getEditor("root.title").setValue("from button");
            },
          },
        },
      },
    },
  });
  cy.get("eox-jsonform")
    .shadow()
    .find("[data-schemapath='root.button'] button")
    .click();
  settle();
  cy.get("@activity").should("have.been.calledOnce");
  cy.get("eox-jsonform")
    .shadow()
    .find("[data-schemapath='root.button'] button")
    .click();
  settle();
  cy.get("@activity").should("have.been.calledOnce");
};

/** Classless buttons must be attributed by value changes, not editor markup. */
export const genericButtonActivityTest = () => {
  mountForm();
  cy.get("eox-jsonform").then(([element]) => {
    const form = /** @type {import("../../src/main").EOxJSONForm} */ (element);
    const container = form.renderRoot.querySelector("form");
    const noOp = document.createElement("button");
    noOp.type = "button";
    noOp.id = "generic-no-op";
    noOp.textContent = "No change";
    container.append(noOp);
    const mutate = document.createElement("button");
    mutate.type = "button";
    mutate.id = "generic-mutation";
    mutate.innerHTML = "<strong>Change value</strong>";
    mutate.addEventListener("click", () => {
      form.editor.getEditor("root.title").setValue("from generic button");
    });
    container.append(mutate);
  });
  cy.get("eox-jsonform").shadow().find("#generic-no-op").click();
  settle();
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform").then(([element]) => {
    /** @type {import("../../src/main").EOxJSONForm} */ (
      element
    ).editor.setValue({
      title: "programmatic after no-op",
    });
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform").shadow().find("#generic-mutation strong").click();
  settle();
  cy.get("@activity").should("have.been.calledOnce");
  cy.get("@activity")
    .its("lastCall.args.0.detail.payload.title")
    .should("equal", "from generic button");
  // The same button is now a no-op even if JSONEditor emits change again.
  cy.get("eox-jsonform").shadow().find("#generic-mutation strong").click();
  settle();
  cy.get("@activity").should("have.been.calledOnce");
};

/** Explicit and default submit buttons must not establish edit attribution. */
export const submitButtonAttributionTest = () => {
  mountForm();
  cy.get("eox-jsonform").then(([element]) => {
    const form = /** @type {import("../../src/main").EOxJSONForm} */ (element);
    for (const explicit of [true, false]) {
      const button = document.createElement("button");
      if (explicit) button.type = "submit";
      button.id = explicit ? "explicit-submit" : "default-submit";
      button.textContent = "Submit";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        form.editor.setValue({ title: button.id });
      });
      form.renderRoot.querySelector("form").append(button);
    }
  });
  cy.get("eox-jsonform").shadow().find("#explicit-submit").click();
  settle();
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform").shadow().find("#default-submit").click();
  settle();
  cy.get("@activity").should("not.have.been.called");
};

/** Recreating an editor must abort old form listeners and keep edits working. */
export const recreatedActivityTest = () => {
  mountForm();
  cy.get("eox-jsonform").then(([element]) => {
    const form = /** @type {import("../../src/main").EOxJSONForm} */ (element);
    cy.spy(form.renderRoot.querySelector("form"), "addEventListener").as(
      "listeners",
    );
    form.schema = { ...schema, title: "Recreated" };
  });
  cy.get("eox-jsonform").should(([element]) => {
    expect(
      /** @type {import("../../src/main").EOxJSONForm} */ (element).editor
        .schema.title,
    ).to.equal("Recreated");
  });
  settle();
  cy.get("@listeners").then((spy) => {
    const calls = /** @type {import("sinon").SinonSpy} */ (
      /** @type {unknown} */ (spy)
    ).getCalls();
    const signals = calls.map((call) => call.args[2]?.signal).filter(Boolean);
    expect(signals).to.have.length(6);
    cy.get("eox-jsonform").then(([element]) => {
      /** @type {import("../../src/main").EOxJSONForm} */ (element).schema = {
        ...schema,
        title: "Recreated again",
      };
    });
    cy.wrap(signals).should((oldSignals) => {
      expect(oldSignals.every((signal) => signal.aborted)).to.equal(true);
    });
  });
  settle();
  cy.get("@activity").should("not.have.been.called");
  cy.get("eox-jsonform").shadow().find("input[name='root[title]']").type("x");
  settle();
  cy.get("@activity").should("have.been.calledOnce");
};
