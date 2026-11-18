/**
 * @element eox-map-workspace
 * @description Map workspace layout with fullscreen map and floating sidebar.
 */
export class EOxMapWorkspace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver(() => this._setupSlots());
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          flex: 1 1 100%;
          overflow: hidden;
        }
        ::slotted([slot="map"]) {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
          display: block !important;
        }
        .sidebar, .sidebar-left {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        .sidebar-right {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        @media (max-width: 900px) {
          .sidebar, .sidebar-left, .sidebar-right {
            width: min(320px, calc(50% - 1.5rem));
            max-width: calc(50% - 1.5rem);
          }
        }
        .sidebar::-webkit-scrollbar, .sidebar-left::-webkit-scrollbar, .sidebar-right::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-thumb, .sidebar-left::-webkit-scrollbar-thumb, .sidebar-right::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        ::slotted([slot="sidebar"]),
        ::slotted([slot="sidebar-left"]),
        ::slotted([slot="sidebar-right"]),
        ::slotted([slot="right"]) {
          pointer-events: auto !important;
          width: 100% !important;
          height: auto !important;
          box-sizing: border-box !important;
        }
      </style>
      <slot name="map"></slot>
      <div class="sidebar sidebar-left">
        <slot name="sidebar"></slot>
        <slot name="sidebar-left"></slot>
      </div>
      <div class="sidebar-right">
        <slot name="sidebar-right"></slot>
        <slot name="right"></slot>
      </div>
      <slot></slot>
    `;
    this._setupSlots();
    this._observer.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  _setupSlots() {
    const children = /** @type {HTMLElement[]} */ (Array.from(this.children));
    if (children.length === 0) return;

    // First child is map if not already slotted
    const mapChild = children[0];
    if (mapChild) {
      if (!mapChild.hasAttribute("slot")) {
        mapChild.setAttribute("slot", "map");
      }
      mapChild.style.width = "100%";
      mapChild.style.height = "100%";
      mapChild.style.display = "flex";
      mapChild.style.flexDirection = "row";
      mapChild.style.position = "absolute";
      mapChild.style.top = "0";
      mapChild.style.left = "0";
      mapChild.style.zIndex = "0";

      // If mapChild has child maps (e.g. side-by-side)
      const subChildren = /** @type {HTMLElement[]} */ (
        Array.from(mapChild.children || [])
      );
      if (subChildren.length >= 2) {
        subChildren.forEach((sub) => {
          sub.style.flex = "1 1 50%";
          sub.style.width = "50%";
          sub.style.height = "100%";
          sub.style.position = "relative";
          sub.style.display = "block";

          const innerMaps = sub.querySelectorAll
            ? /** @type {HTMLElement[]} */ (
                Array.from(sub.querySelectorAll("eox-map"))
              )
            : [];
          innerMaps.forEach((m) => {
            m.style.width = "100%";
            m.style.height = "100%";
            m.style.display = "block";
            // @ts-expect-error OpenLayers map property on eox-map
            if (m.map) m.map.updateSize();
          });
        });
      }
    }

    let hasRightSidebar = false;

    // Remaining children are sidebars
    for (let i = 1; i < children.length; i++) {
      const sidebarChild = children[i];
      const isRight =
        sidebarChild.id === "right_col" ||
        sidebarChild.getAttribute("slot") === "sidebar-right" ||
        sidebarChild.getAttribute("slot") === "right" ||
        (children.length >= 3 && i >= 2 && sidebarChild.id !== "left_col");

      if (isRight) {
        hasRightSidebar = true;
        if (
          !sidebarChild.hasAttribute("slot") ||
          sidebarChild.getAttribute("slot") !== "sidebar-right"
        ) {
          sidebarChild.setAttribute("slot", "sidebar-right");
        }
      } else {
        if (
          !sidebarChild.hasAttribute("slot") ||
          sidebarChild.getAttribute("slot") !== "sidebar"
        ) {
          sidebarChild.setAttribute("slot", "sidebar");
        }
      }

      sidebarChild.style.width = "100%";
      sidebarChild.style.height = "auto";
      sidebarChild.style.boxSizing = "border-box";

      const cards = sidebarChild.querySelectorAll
        ? /** @type {HTMLElement[]} */ (
            Array.from(
              sidebarChild.querySelectorAll("a2ui-card, a2ui-basic-card"),
            )
          )
        : [];
      cards.forEach((card) => {
        card.style.margin = "0";
        card.style.width = "100%";
        card.style.maxWidth = "100%";
        card.style.height = "auto";
        card.style.boxSizing = "border-box";
        card.style.wordBreak = "break-word";
        card.style.overflowWrap = "break-word";
      });
    }

    if (this.shadowRoot) {
      const rightSidebarEl = /** @type {HTMLElement|null} */ (
        this.shadowRoot.querySelector(".sidebar-right")
      );
      if (rightSidebarEl) {
        rightSidebarEl.style.display = hasRightSidebar ? "flex" : "none";
      }
    }
  }
}

customElements.define("eox-map-workspace", EOxMapWorkspace);
