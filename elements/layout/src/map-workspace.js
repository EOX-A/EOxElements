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
        .sidebar {
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
        .sidebar::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        ::slotted([slot="sidebar"]) {
          pointer-events: auto !important;
          width: 100% !important;
          height: auto !important;
          box-sizing: border-box !important;
        }
      </style>
      <slot name="map"></slot>
      <div class="sidebar">
        <slot name="sidebar"></slot>
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
    const children = Array.from(this.children);
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
      const subChildren = Array.from(mapChild.children || []);
      if (subChildren.length >= 2) {
        subChildren.forEach((sub) => {
          sub.style.flex = "1 1 50%";
          sub.style.width = "50%";
          sub.style.height = "100%";
          sub.style.position = "relative";
          sub.style.display = "block";

          const innerMaps = sub.querySelectorAll ? Array.from(sub.querySelectorAll("eox-map")) : [];
          innerMaps.forEach((m) => {
            m.style.width = "100%";
            m.style.height = "100%";
            m.style.display = "block";
            if (m.map) m.map.updateSize();
          });
        });
      }
    }

    // Remaining children are sidebar
    for (let i = 1; i < children.length; i++) {
      const sidebarChild = children[i];
      if (!sidebarChild.hasAttribute("slot")) {
        sidebarChild.setAttribute("slot", "sidebar");
      }
      sidebarChild.style.width = "100%";
      sidebarChild.style.height = "auto";
      sidebarChild.style.boxSizing = "border-box";

      const cards = sidebarChild.querySelectorAll ? Array.from(sidebarChild.querySelectorAll("a2ui-card, a2ui-basic-card")) : [];
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
  }
}

customElements.define("eox-map-workspace", EOxMapWorkspace);
