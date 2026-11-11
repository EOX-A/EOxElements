import { html, unsafeStatic } from "lit/static-html.js";

/**
 * Compare functional change events with user-attributed activity on a containing element.
 * All exported behavior lives in args: the ready handler is self-contained because
 * the framework renderers serialize it without this module's lexical scope.
 */
export default {
  args: {
    schema: {
      type: "object",
      properties: { title: { type: "string", default: "Initial title" } },
    },
    storyTemplateBefore: `<section data-activity-demo>
      <p>Edit the title to emit activity. Assigning the value from the host updates the form without activity.</p>`,
    storyTemplateAfter: `
      <button type="button" data-programmatic-update disabled>Set value programmatically</button>
      <button type="button" data-clear-log>Clear event log</button>
      <h3>Functional and activity events</h3>
      <pre data-activity-log aria-live="polite"></pre>
    </section>`,
    /** @param {Event} event - The form is ready before its initial functional change event. */
    ready: (event) => {
      const form = /** @type {HTMLElement & { value: { title: string } }} */ (
        event.currentTarget
      );
      const host = form.closest("[data-activity-demo]");
      const button = /** @type {HTMLButtonElement} */ (
        host.querySelector("[data-programmatic-update]")
      );
      // Schema reinitialization must not register duplicate parent listeners.
      if (!button.disabled) return;
      const log = host.querySelector("[data-activity-log]");
      let updates = 0;
      /** @param {CustomEvent & { isUser?: boolean }} notification - A functional or activity event. */
      const record = (notification) => {
        if (!(notification instanceof CustomEvent)) return;
        const entry =
          notification.type === "eox:activity"
            ? {
                event: notification.type,
                element: notification.detail.element,
                action: notification.detail.action,
                payload: notification.detail.payload,
              }
            : {
                event: notification.type,
                isUser: notification.isUser,
                value: notification.detail,
              };
        log.textContent += `${JSON.stringify(entry)}\n`;
      };
      host.addEventListener("change", record);
      host.addEventListener("eox:activity", record);
      button.onclick = () => {
        form.value = { title: `Programmatic update ${++updates}` };
      };
      /** @type {HTMLButtonElement} */ (
        host.querySelector("[data-clear-log]")
      ).onclick = () => {
        log.textContent = "";
      };
      button.disabled = false;
    },
  },
  render: (args) => html`
    ${unsafeStatic(args.storyTemplateBefore)}
    <eox-jsonform .schema=${args.schema} @ready=${args.ready}></eox-jsonform>
    ${unsafeStatic(args.storyTemplateAfter)}
  `,
};
