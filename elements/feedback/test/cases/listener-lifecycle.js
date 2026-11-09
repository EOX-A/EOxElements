import { html } from "lit";

/** Removed dialogs must not process document keyboard events. */
export const detachedKeyboardTest = () => {
  cy.mount(html`<eox-feedback></eox-feedback>`);
  cy.get("eox-feedback").then(([element]) => {
    const feedback = /** @type {import("../../src/main").EOxFeedback} */ (
      element
    );
    const keyboard = cy.spy(feedback, "onKeyboardInput");
    const submit = cy.stub(feedback, "onSubmit");
    feedback.shadowRoot.querySelector("#submit").classList.remove("disabled");
    feedback.remove();
    document.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Enter", ctrlKey: true }),
    );
    document.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", keyCode: 27 }),
    );
    expect(keyboard).not.to.have.been.called;
    expect(submit).not.to.have.been.called;
  });
};

/** Reconnected dialogs must register exactly one keyboard and control handler. */
export const reconnectedKeyboardTest = () => {
  cy.mount(html`<eox-feedback></eox-feedback>`);
  cy.get("eox-feedback").then(([element]) => {
    const feedback = /** @type {import("../../src/main").EOxFeedback} */ (
      element
    );
    const parent = feedback.parentElement;
    const keyboard = cy.spy(feedback, "onKeyboardInput");
    const cancel = cy.spy(feedback, "onCancel");
    const activity = cy.stub();
    feedback.addEventListener("eox:activity", activity);
    for (let i = 0; i < 3; i++) {
      feedback.remove();
      parent.append(feedback);
    }
    document.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", keyCode: 27 }),
    );
    expect(keyboard).to.have.been.calledOnce;
    expect(cancel).to.have.been.calledOnce;
    expect(activity).to.have.been.calledOnce;
    expect(feedback.isConnected).to.equal(false);
    parent.append(feedback);
    feedback.shadowRoot.querySelector("button#cancel").click();
    expect(cancel).to.have.been.calledTwice;
    expect(activity).to.have.been.calledTwice;
  });
};
