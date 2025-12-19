import RegionScreenshot from "region-screenshot-js";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import "./feedback-button.js";

/**
 * The `eox-feedback` element provides a modal dialog for collecting user feedback. It supports screenshot capture, customizable endpoint, and flexible styling.
 * The feedback modal (`<eox-feedback></eox-feedback>`) can be included in the DOM directly or via a floating button (`<eox-feedback-button></eox-feedback-button>`), which can be positioned in any corner of the viewport.
 *
 * @element eox-feedback
 *
 * @attr {string} endpoint - The endpoint to send the feedback to as POST message.
 * @attr {string|null} [unstyled=undefined] - If provided, the element will not be styled with EOX styles.
 * @attr {string|null} [email=undefined] - If provided, an email will be sent in the post.
 *
 * @fires close - The modal was closed.
 * @fires submit - The feedback was submitted. The `CustomEvent.detail` contains the FormData object.
 */
export class EOxFeedback extends HTMLElement {
  static observedAttributes = ["endpoint", "unstyled", "email"];


  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.includeScreenshot = null;
    this.areaSelection = null;

    this.regionScreenshot = null;

    this.screenShotFile = null;
    this.email = null;

    this.endpoint = null;
  }

  connectedCallback() {
    this.endpoint =
      this.getAttribute("endpoint") ||
      document.querySelector("eox-feedback-button")?.getAttribute("endpoint");
    this.email = this.getAttribute("email") ||
      document.querySelector("eox-feedback-button")?.getAttribute("email");

    this.render();
    this.shadowRoot
      .querySelector("input[type=checkbox]")
      .addEventListener("click", (e) => this.onToggleScreenshot(e));
    this.shadowRoot
      .querySelector("button#submit")
      .addEventListener("click", () => this.onSubmit());
    this.shadowRoot
      .querySelector("button#cancel")
      .addEventListener("click", () => this.onCancel());
    this.shadowRoot
      .querySelector("textarea")
      .addEventListener("input", (e) => this.onTextInput(e));
    document.addEventListener("keyup", (e) => this.onKeyboardInput(e));
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("input[type=checkbox]")
      .removeEventListener("click", (e) => this.onToggleScreenshot(e));
    this.shadowRoot
      .querySelector("button#submit")
      .removeEventListener("click", () => this.onSubmit());
    this.shadowRoot
      .querySelector("button#cancel")
      .removeEventListener("click", () => this.onCancel());
    this.shadowRoot
      .querySelector("textarea")
      .removeEventListener("input", (e) => this.onTextInput(e));
    document.removeEventListener("keyup", (e) => this.onKeyboardInput(e));
  }

  onKeyboardInput(e) {
    if (e.keyCode === 27) {
      this.onCancel();
    }
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      if (this.shadowRoot.querySelector("textarea").value.length > 0) {
        this.onSubmit();
      }
    }
  }

  onOverlayDraw(e) {
    this.areaSelection = e.detail;
  }

  onTextInput(e) {
    const submitButton = this.shadowRoot.querySelector("button#submit");
    if (e.target.value.length > 0) {
      submitButton.classList.remove("disabled");
    } else {
      submitButton.classList.add("disabled");
    }
  }

  async onToggleScreenshot(e) {
    this.includeScreenshot = e.target.checked;

    this.shadowRoot
      .querySelector("#screenshot-info")
      .classList.toggle("hidden");

    const existingScreenshot =
      this.shadowRoot.querySelector("#screenshot > img");

    if (!e.target.checked) {
      this.regionScreenshot.close();

      if (existingScreenshot) {
        existingScreenshot.remove();
      }
      return;
    }

    const inputField = this.shadowRoot.querySelector("textarea");
    const submitButton = this.shadowRoot.querySelector("button#submit");
    submitButton.classList.add("disabled");

    this.regionScreenshot = new RegionScreenshot();

    ["closed", "errorCreated", "screenshotDownload"].forEach((event) => {
      this.regionScreenshot.on(event, () => {
        const checkbox = this.shadowRoot.querySelector("input[type=checkbox]");
        if (!(checkbox instanceof HTMLInputElement)) return;
        checkbox.checked = false;
        this.includeScreenshot = false;
        if (inputField.value.length > 0) {
          submitButton.classList.remove("disabled");
        }
      });
    });

    this.regionScreenshot.on("screenshotGenerated", (dataUrl) => {
      const screenshot = document.createElement("img");
      screenshot.src = dataUrl;
      screenshot.classList.add("border");
      this.shadowRoot.querySelector("#screenshot").appendChild(screenshot);

      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[arr.length - 1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      }
      this.screenShotFile = dataURLtoFile(dataUrl, "screenshot.png");
      submitButton.classList.remove("disabled");
    });
  }

  async onSubmit() {
    const container = this.shadowRoot.querySelector("article > div");
    const form = this.shadowRoot.querySelector("#form");
    const progress = this.shadowRoot.querySelector("progress");

    container.classList.add("disabled");
    progress.classList.remove("hidden");

    const requestBody = new FormData();
    if (this.includeScreenshot) {
      requestBody.append("file", this.screenShotFile);
    }

    requestBody.append(
      "message",
      this.shadowRoot.querySelector("textarea").value,
    );

    if (this.email) {
      requestBody.append("email", this.email);
    }

    requestBody.append("userAgent", window.navigator.userAgent);

    requestBody.append("location", window.location.href);

    if (!this.endpoint) {
      throw new Error("No endpoint attribute defined!");
    }

    const message = document.createElement("div");
    try {
      await fetch(this.endpoint, {
        method: "POST",
        body: requestBody,
      });
      message.innerHTML = `
        <p class="green-text middle-align center-align">Thank you for submitting your feedback!</p>
        `;
    } catch (_) {
      message.innerHTML = `
        <p class="red-text middle-align center-align">Oh no - something went wrong! Apologies, we'll try to find out what happened.</p>
        `;
    }
    this.dispatchEvent(new CustomEvent("submit", { detail: requestBody }));

    form.classList.add("hidden");
    container.appendChild(message);

    container.classList.remove("disabled");
    progress.classList.add("hidden");
    setTimeout(() => {
      this.onCancel();
    }, 4000);
  }

  onCancel() {
    if (this.regionScreenshot) {
      this.regionScreenshot.close();
    }
    this.remove();
    this.dispatchEvent(new Event("close"));
  }

  render() {
    /**
     * @type {import("./feedback-button").EOxFeedbackButton}
     */
    const feedbackButton = document.querySelector("eox-feedback-button");
    this.shadowRoot.innerHTML = `
      <style>
        ${style}
        ${this.getAttribute("unstyled") === null && styleEOX}
        :host {
          display: block;
          position: fixed !important;
          width: 320px;
          ${
            feedbackButton
              ? `
            margin: 50px 27px !important;
            ${feedbackButton.position?.includes("top") ? "top: 0px;" : ""}
            ${feedbackButton.position?.includes("right") ? "right: 0px;" : ""}
            ${feedbackButton.position?.includes("bottom") ? "bottom: 0px;" : ""}
            ${feedbackButton.position?.includes("left") ? "left: 0px;" : ""}
          `
              : ``
          }
          z-index: 10000;
        }
        .hidden {
          display: none !important;
        }
        .disabled {
          opacity: .5;
          pointer-events: none;
        }
        .field > :is(input, textarea, select) {
          font-size: 0.875rem !important;
        }
        #screenshot > img {
          max-width: 100%;
          max-height: 100px;
        }
        .region-screenshot_tools {
          z-index: 10001;
        }
      </style>
      <article class="no-margin small-round">
        <div ${!this.endpoint ? 'class="disabled"' : ""}>
          <div id="form">
            <nav>
              <label class="switch">
                <input type="checkbox">
                <span></span>
              </label>
              <div class="max">
                <div>Include a screenshot</div>
                <small id="screenshot-info" class="italic hidden">Drag to highlight part of the page</small>
              </div>
            </nav>
            <div id="screenshot" class="middle-align center-align"></div>
            <div class="field textarea border">
              <textarea placeholder="${!this.endpoint ? "Missing endpoint attribute!" : "Type your feedback here! Also include some contact info if you'd like us to reach out to you."}"></textarea>
            </div>
            <nav>
              <progress class="circle small hidden"></progress>
              <div class="max"></div>
              <button id="cancel" class="border">Cancel</button>
              <button id="submit" class="disabled">Submit</button>
            </nav>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("eox-feedback", EOxFeedback);
