import { LitElement, html, nothing } from "lit";
import { MessageProcessor } from "@a2ui/web_core/v0_9";
import { combinedCatalog } from "./eox-catalog-helper.js";
// Import A2uiSurface to ensure the custom element is registered
import { A2uiSurface, Context } from "@a2ui/lit/v0_9";
import { ContextProvider } from "@lit/context";
import { renderMarkdown } from "@a2ui/markdown-it";

/**
 * A wrapper custom element that accepts a2ui stream/messages data and renders the elements inside.
 *
 * @element eox-a2ui-wrapper
 */
export class EOxA2uiWrapper extends LitElement {
  static get properties() {
    return {
      stream: { type: Array },
      messages: { type: Array },
      catalog: { type: Object },
    };
  }

  constructor() {
    super();
    this.catalog = combinedCatalog;
    this._stream = [];
    this._messages = [];

    // Provide the markdown renderer context to child components like Text
    new ContextProvider(this, {
      context: Context.markdown,
      initialValue: renderMarkdown,
    });
  }

  createRenderRoot() {
    return this;
  }

  get stream() {
    return this._stream;
  }

  set stream(val) {
    const oldVal = this._stream;
    let parsed = val;
    if (typeof val === "string") {
      try {
        parsed = JSON.parse(val);
      } catch (e) {
        console.error("Failed to parse stream string as JSON:", e);
      }
    }
    this._stream = parsed;
    this.requestUpdate("stream", oldVal);
    this._processNewMessages(parsed);
  }

  get messages() {
    return this._messages;
  }

  set messages(val) {
    const oldVal = this._messages;
    let parsed = val;
    if (typeof val === "string") {
      try {
        parsed = JSON.parse(val);
      } catch (e) {
        console.error("Failed to parse messages string as JSON:", e);
      }
    }
    this._messages = parsed;
    this.requestUpdate("messages", oldVal);
    this._processNewMessages(parsed);
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("catalog")) {
      this._initMessageProcessor();
    }
  }

  _initMessageProcessorOnly() {
    if (this._surfaceCreatedSub) {
      this._surfaceCreatedSub.unsubscribe();
    }
    if (this._surfaceDeletedSub) {
      this._surfaceDeletedSub.unsubscribe();
    }

    this.messageProcessor = new MessageProcessor([this.catalog]);

    this._surfaceCreatedSub = this.messageProcessor.onSurfaceCreated(() =>
      this.requestUpdate(),
    );
    this._surfaceDeletedSub = this.messageProcessor.onSurfaceDeleted(() =>
      this.requestUpdate(),
    );

    this._processedMessages = [];
  }

  _initMessageProcessor() {
    this._initMessageProcessorOnly();

    // Re-process any existing messages
    if (this._stream && this._stream.length > 0) {
      this._processNewMessages(this._stream);
    } else if (this._messages && this._messages.length > 0) {
      this._processNewMessages(this._messages);
    }
  }

  _processNewMessages(msgs) {
    if (!this.messageProcessor || !msgs) return;
    try {
      const processedCount = this._processedMessages?.length || 0;
      let newMsgs = msgs;

      const isAppend =
        processedCount > 0 &&
        processedCount < msgs.length &&
        this._processedMessages.every((msg, idx) => JSON.stringify(msg) === JSON.stringify(msgs[idx]))

      if (isAppend) {
        newMsgs = msgs.slice(processedCount);
      } else {
        this._initMessageProcessorOnly();
      }

      this.messageProcessor.processMessages(newMsgs);
      this._processedMessages = [...msgs];
    } catch (e) {
      console.error("Error processing messages:", e);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.messageProcessor) {
      this._initMessageProcessor();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._surfaceCreatedSub) {
      this._surfaceCreatedSub.unsubscribe();
    }
    if (this._surfaceDeletedSub) {
      this._surfaceDeletedSub.unsubscribe();
    }
  }

  render() {
    if (!this.messageProcessor) return nothing;
    const surfaces = Array.from(
      this.messageProcessor.model.surfacesMap.values(),
    );
    return html`
      ${surfaces.map(
        (surface) => html` <a2ui-surface .surface=${surface}></a2ui-surface> `,
      )}
    `;
  }
}

customElements.define("eox-a2ui-wrapper", EOxA2uiWrapper);
