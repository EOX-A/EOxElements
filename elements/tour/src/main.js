import { LitElement, html } from "lit";
import { driver } from "driver.js";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";

/**
 * The `eox-tour` element uses [driver.js](https://driverjs.com/) to create interactive product tours.
 * It supports cross-iframe handoffs (start a tour in a "parent" and continue inside an iframe),
 * persistent "seen" state via `localStorage`, and styling based on EOxUI.
 *
 * Features:
 * - Define a series of steps to guide users through an application.
 * - Highlight target elements and display customizable popovers.
 * - Cross-iframe handoff logic seamlessly transitioning between parent window and iframe.
 * - Persistent state tracking using `localStorage` to avoid repeatedly showing completed tours.
 * - Prevent automatic start on mount for manual control over when the tour begins.
 *
 * The `eox-tour` element does not render any visible content itself; it operates entirely through the driver.js popovers and highlights.
 * Therefore it doesn't matter where in the DOM you place the `<eox-tour>` element, but it must be present in the document for the tour to function.
 *
 * **Note on the `id` attribute:**
 * An `id` attribute is required for identifying instances for `localStorage` persistence, and
 * it is strictly mandated for iframe handoff scenarios to correctly route `postMessage` synchronization.
 *
 * @element eox-tour
 * @fires {CustomEvent} tour-highlight-started - Fired when driver.js `onHighlightStarted` is called.
 * @fires {CustomEvent} tour-highlighted - Fired when driver.js `onHighlighted` is called.
 * @fires {CustomEvent} tour-deselected - Fired when driver.js `onDeselected` is called.
 * @fires {CustomEvent} tour-destroy-started - Fired when driver.js `onDestroyStarted` is called.
 */
export class EOxTour extends LitElement {
  static get properties() {
    return {
      /**
       * The driver.js configuration object. See the [driver.js docs](https://driverjs.com/docs/configuration) for available options.
       */
      config: { attribute: false, type: Object },
      /**
       * Whether to show the tour every time the component is mounted,
       * bypassing the `localStorage` check.
       */
      showEveryTime: { attribute: "show-every-time", type: Boolean },
      /**
       * Whether to prevent the tour from starting automatically on mount.
       * If true, the tour must be started manually via the `start()` method.
       */
      preventAutoStart: { attribute: "prevent-auto-start", type: Boolean },
      /**
       * Whether to disable the default EOx branded styling.
       */
      unstyled: { attribute: "unstyled", type: Boolean },
    };
  }

  constructor() {
    super();
    this.config = {};
    this.showEveryTime = false;
    this.preventAutoStart = false;
    this.unstyled = false;
    /**
     * The driver.js instance.
     * @type {import('driver.js').Driver}
     * @private
     */
    this.driver = null;
    /**
     * The localStorage key for storing shown tours.
     * @type {string}
     * @private
     */
    this.TOUR_KEY = "eox-tour-shown";
  }

  /**
   * Default configuration for popover rendering, including icon replacements
   * and EOx-specific layout adjustments.
   * @type {object}
   * @private
   */
  defaultConfig = {
    onPopoverRender: (popover, { config, state }) => {
      popover.wrapper.classList.add("padding");

      // Replace button icons
      if (popover.previousButton) {
        popover.previousButton.innerHTML = `
          <span style="pointer-events: none">${config.prevBtnText || "Previous"}</span>
        `;
        popover.previousButton.style.display = config.showButtons?.includes(
          "previous",
        )
          ? "flex"
          : "none";
        popover.previousButton.classList.add(
          "small",
          "small-text",
          "transparent",
          "primary-text",
        );
      }

      if (popover.nextButton) {
        const step = config.steps[state.activeIndex];
        const isLastStep =
          state.activeIndex === config.steps.length - 1 &&
          !step.popover?.targetIframe &&
          !step.popover?.returnToParent &&
          (!config.totalSteps ||
            state.activeIndex + 1 + (config.stepOffset || 0) >=
              config.totalSteps);
        popover.nextButton.innerHTML = `
          <span style="pointer-events: none">${
            isLastStep
              ? config.doneBtnText || "Done"
              : config.nextBtnText || "Next"
          }</span>
          <i style="pointer-events: none" class="icon small">
            ${
              isLastStep
                ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-right</title><path d="M10,17L15,12L10,7V17Z" /></svg>`
            }
          </i>
        `;
        popover.nextButton.style.display = config.showButtons?.includes("next")
          ? "flex"
          : "none";
        popover.nextButton.classList.add("small", "small-text");
      }

      if (popover.closeButton) {
        popover.closeButton.innerHTML = `
          <i style="pointer-events: none" class="icon small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </i>
        `;
        popover.closeButton.style.display = config.showButtons?.includes(
          "close",
        )
          ? "flex"
          : "none";
        popover.closeButton.classList.add(
          "transparent",
          "circle",
          "small",
          "absolute",
          "top",
          "right",
          "small-margin",
        );
      }

      if (popover.progress) {
        popover.progress.style.display =
          config.showButtons?.showProgress === undefined ||
          !config.showButtons?.showProgress
            ? "flex"
            : "none";
        popover.progress.style.alignItems = "center";
        popover.progress.classList.add("small-text");
      }

      // Replace footerButton with <nav> tag
      if (popover.footerButtons && popover.footerButtons.parentElement) {
        const nav = document.createElement("nav");
        nav.style.display = "flex";
        nav.style.alignItems = "center";

        // Move children directly to keep driver.js DOM references intact
        while (popover.footerButtons.firstChild) {
          nav.appendChild(popover.footerButtons.firstChild);
        }

        popover.footerButtons.parentElement.replaceChild(
          nav,
          popover.footerButtons,
        );
        popover.footerButtons = nav;
      }

      if (popover.title && popover.title.parentElement) {
        const title = document.createElement("h6");
        title.innerHTML = popover.title.innerHTML;
        popover.title.parentElement.replaceChild(title, popover.title);
        title.classList.add("small");
      }
    },
  };

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this._handleMessage);
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("message", this._handleMessage);
    if (this.driver) {
      this.driver.destroy();
    }
  }

  /**
   * Handles incoming `postMessage` events for cross-iframe synchronization.
   * Supported message types: EOX_TOUR_HANDOFF, EOX_TOUR_RESUME, EOX_TOUR_DESTROY.
   *
   * @param {MessageEvent} event
   * @private
   */
  _handleMessage = (event) => {
    const data = event.data;
    if (data && data.type === "EOX_TOUR_HANDOFF" && data.tourId === this.id) {
      let startIndex =
        data.childStepIndex !== undefined ? data.childStepIndex : 0;
      if (startIndex === -1 && this.config?.steps) {
        startIndex = this.config.steps.length - 1;
      }
      this.start(startIndex);
    } else if (
      data &&
      data.type === "EOX_TOUR_RESUME" &&
      data.tourId === this.id
    ) {
      this.start(data.parentStepIndex || 0);
    } else if (
      data &&
      data.type === "EOX_TOUR_DESTROY" &&
      data.tourId === this.id
    ) {
      if (this.driver) this.driver.destroy();
    }
  };

  /**
   * @override
   */
  updated(changedProperties) {
    if (changedProperties.has("config") && this.config) {
      this._initializeDriver();
    }
  }

  /**
   * Initializes or re-initializes the driver.js instance with the current config.
   * @private
   */
  _initializeDriver() {
    if (this.driver) {
      this.driver.destroy();
    }

    // Merge provided config with default formatting logic
    const finalConfig = {
      ...this.defaultConfig,
      ...this.config,
      onNextClick: (element, step, opts) => {
        if (this.config.onNextClick) {
          this.config.onNextClick(element, step, opts);
        }

        const activeIndex = opts.driver.getActiveIndex() ?? 0;
        const nextStep = opts.config.steps[activeIndex + 1];

        if (nextStep && nextStep.popover?.targetIframe) {
          const iframe = document.querySelector(nextStep.popover.targetIframe);
          if (iframe && iframe.contentWindow) {
            opts.driver.moveNext();
            iframe.contentWindow.postMessage(
              {
                type: "EOX_TOUR_HANDOFF",
                tourId: this.id,
                childStepIndex: nextStep.popover.childStepIndex || 0,
              },
              "*",
            );
          }
        } else if (step.popover?.returnToParent) {
          opts.driver.destroy();
          window.parent.postMessage(
            {
              type: "EOX_TOUR_RESUME",
              tourId: this.id,
              parentStepIndex: step.popover.parentStepIndex || 0,
            },
            "*",
          );
        } else if (!nextStep) {
          opts.driver.destroy();
        } else {
          opts.driver.moveNext();
        }
      },
      onPrevClick: (element, step, opts) => {
        if (this.config.onPrevClick) {
          this.config.onPrevClick(element, step, opts);
        }

        const activeIndex = opts.driver.getActiveIndex() ?? 0;
        const prevStep = opts.config.steps[activeIndex - 1];

        if (prevStep && prevStep.popover?.targetIframe) {
          const iframe = document.querySelector(prevStep.popover.targetIframe);
          if (iframe && iframe.contentWindow) {
            opts.driver.movePrevious();
            iframe.contentWindow.postMessage(
              {
                type: "EOX_TOUR_HANDOFF",
                tourId: this.id,
                childStepIndex:
                  prevStep.popover.backwardChildStepIndex !== undefined
                    ? prevStep.popover.backwardChildStepIndex
                    : -1,
              },
              "*",
            );
          }
        } else if (step.popover?.returnToParentBackward) {
          opts.driver.destroy();
          window.parent.postMessage(
            {
              type: "EOX_TOUR_RESUME",
              tourId: this.id,
              parentStepIndex: step.popover.backwardParentStepIndex || 0,
            },
            "*",
          );
        } else if (
          activeIndex === 0 &&
          window.parent !== window &&
          step.popover?.backwardParentStepIndex !== undefined
        ) {
          opts.driver.destroy();
          window.parent.postMessage(
            {
              type: "EOX_TOUR_RESUME",
              tourId: this.id,
              parentStepIndex: step.popover.backwardParentStepIndex,
            },
            "*",
          );
        } else {
          opts.driver.movePrevious();
        }
      },
      onCloseClick: (element, step, opts) => {
        if (this.config.onCloseClick) {
          this.config.onCloseClick(element, step, opts);
        }

        opts.driver.destroy();

        // Broadcast destroy message to parent in case we are in an iframe
        if (window.parent !== window) {
          window.parent.postMessage(
            { type: "EOX_TOUR_DESTROY", tourId: this.id },
            "*",
          );
        }
      },

      onHighlightStarted: (element, step, options) => {
        // Remove padding/radius for iframe handoff highlight
        if (step.popover?.targetIframe) {
          options.driver.setConfig({
            ...options.config,
            stagePadding: 0,
            stageRadius: 0,
          });
        } else {
          options.driver.setConfig({
            ...options.config,
            stagePadding: this.config.stagePadding ?? 10,
            stageRadius: this.config.stageRadius ?? 5,
          });
        }

        /** @type {CustomEvent} */
        const event = new CustomEvent("tour-highlight-started", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        if (this.config.onHighlightStarted)
          this.config.onHighlightStarted(element, step, options);
      },
      onHighlighted: (element, step, options) => {
        /** @type {CustomEvent} */
        const event = new CustomEvent("tour-highlighted", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        if (this.config.onHighlighted)
          this.config.onHighlighted(element, step, options);
      },
      onDeselected: (element, step, options) => {
        /** @type {CustomEvent} */
        const event = new CustomEvent("tour-deselected", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        if (this.config.onDeselected)
          this.config.onDeselected(element, step, options);
      },
      onDestroyStarted: (element, step, options) => {
        /** @type {CustomEvent} */
        const event = new CustomEvent("tour-destroy-started", {
          detail: { element, step, options },
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(event);
        if (this.config.onDestroyStarted)
          this.config.onDestroyStarted(element, step, options);
      },
      onPopoverRender: (popover, ctx) => {
        if (!popover.wrapper.shadowRoot) {
          const shadow = popover.wrapper.attachShadow({ mode: "open" });
          const styleEl = document.createElement("style");

          const shadowStyle = style.replace(
            /\.driver-popover\b(?![-\w])/g,
            ":host",
          );

          styleEl.innerHTML = `
            ${shadowStyle}
            ${!this.unstyled ? styleEOX : ""}
          `;
          shadow.appendChild(styleEl);

          while (popover.wrapper.firstChild) {
            shadow.appendChild(popover.wrapper.firstChild);
          }
        }

        // Restore button functionality that shadow root encapsulation breaks
        // Driver.js uses a document-level capture listener that swallows clicks
        // since shadow DOM retargets event.target to the popover wrapper.
        // We intercept at the window level (before document) to properly route them.
        if (!popover.wrapper._shadowClickDelegated) {
          popover.wrapper._shadowClickDelegated = true;
          window.addEventListener(
            "click",
            (e) => {
              if (!popover.wrapper.isConnected) return;
              const path = e.composedPath();
              const step = ctx.config.steps[ctx.state.activeIndex ?? 0];
              const element = ctx.state.activeElement || document.body;

              if (path.includes(popover.nextButton)) {
                e.stopImmediatePropagation();
                e.preventDefault();
                ctx.config.onNextClick(element, step, ctx);
              } else if (path.includes(popover.previousButton)) {
                e.stopImmediatePropagation();
                e.preventDefault();
                ctx.config.onPrevClick(element, step, ctx);
              } else if (path.includes(popover.closeButton)) {
                e.stopImmediatePropagation();
                e.preventDefault();
                ctx.config.onCloseClick(element, step, ctx);
              }
            },
            { capture: true },
          );
        }

        this.defaultConfig.onPopoverRender(popover, ctx);

        const activeIndex = ctx.state.activeIndex ?? 0;
        const currentStep = ctx.config.steps[activeIndex];

        // Hide the popover entirely if this step is just an iframe handoff step.
        // It provides the backdrop hole, but the actual popover comes from the child iframe.
        if (currentStep?.popover?.targetIframe) {
          popover.wrapper.style.display = "none";
        }

        // Ensure previous button is responsive for backward handoff
        if (popover.previousButton && activeIndex === 0) {
          if (
            currentStep?.popover?.returnToParentBackward ||
            (window.parent !== window &&
              currentStep?.popover?.backwardParentStepIndex !== undefined)
          ) {
            popover.previousButton.disabled = false;
            popover.previousButton.classList.remove(
              "driver-popover-btn-disabled",
            );
          }
        }

        if (
          popover.progress &&
          (this.config.stepOffset !== undefined ||
            this.config.totalSteps !== undefined)
        ) {
          const offset = this.config.stepOffset || 0;
          const total = this.config.totalSteps || ctx.config.steps.length;
          const current = activeIndex + 1 + offset;
          popover.progress.innerText = `${current} of ${total}`;
        }

        if (this.config.onPopoverRender) {
          this.config.onPopoverRender(popover, ctx);
        }
      },
    };

    this.driver = driver(finalConfig);
    this.showTourOrNot();
  }

  /**
   * Decides whether to start the tour based on `showEveryTime` property
   * and `localStorage` state.
   * @private
   */
  showTourOrNot() {
    if (!this.config || this.preventAutoStart) return;

    if (this.showEveryTime) {
      this.driver.drive();
      return;
    }

    const stored = localStorage.getItem(this.TOUR_KEY);
    let parsed = null;
    try {
      parsed = JSON.parse(stored);
    } catch (_e) {
      /* ignore */
    }

    // Decision logic if tour should be shown or not
    const shouldSkip =
      parsed === true ||
      (parsed && typeof parsed === "object" && parsed[this.id]);

    if (shouldSkip) {
      // If tour was shown before but the config has an ID we want to reset?
      if (typeof parsed === "boolean" && parsed === true && this.id) {
        localStorage.removeItem(this.TOUR_KEY);
        this.showTourOrNot();
        return;
      }
      return;
    }

    this.driver.drive();
    if (this.id) {
      const updated =
        typeof parsed === "object" && parsed !== null ? parsed : {};
      updated[this.id] = true;
      localStorage.setItem(this.TOUR_KEY, JSON.stringify(updated));
    } else {
      localStorage.setItem(this.TOUR_KEY, "true");
    }
  }

  /**
   * Starts the tour at a specific step index.
   *
   * @param {number} [stepIndex=0] The index of the step to start at.
   */
  start(stepIndex = 0) {
    if (this.driver) {
      this.driver.drive(stepIndex);
    }
  }

  /**
   * @override
   */
  createRenderRoot() {
    return this;
  }

  /**
   * @override
   */
  render() {
    return html`
      <style>
        ${style}
      </style>
    `;
  }
}

customElements.define("eox-tour", EOxTour);
