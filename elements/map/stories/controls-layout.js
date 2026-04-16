import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const ControlsLayout = {
  args: {
    storyStyle: `
      .custom-btn {
        background: var(--map-controls-bg, white);
        color: var(--map-controls-color, black);
        backdrop-filter: var(--map-controls-backdrop-filter, none);
        -webkit-backdrop-filter: var(--map-controls-backdrop-filter, none);
        border: none;
        border-radius: 16px;
        padding: 4px 8px;
        height: 32px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        opacity: 1;
        font-family: sans-serif;
        font-size: 12px;
      }
      .custom-btn:hover {
        opacity: .9;
      }
      eox-map#customized-controls {
        --map-controls-bg: rgba(255, 255, 255, 0.8);
        --map-controls-color: var(--primary);
        --map-controls-bg-surface: rgba(255, 255, 255, 0.8);
        --map-controls-color-surface: var(--on-surface);
        --map-controls-backdrop-filter: blur(10px);
      }
      eox-map#customized-controls.dark {
        --map-controls-bg: rgba(0, 0, 0, 0.2);
        --map-controls-color: white;
        --map-controls-bg-surface: rgba(0, 0, 0, 0.3);
        --map-controls-color-surface: white;
      }
    `,
    storySlotContent: `
      <button
        class="custom-btn"
        slot="top-right"
        onclick="const map = document.querySelector('#customized-controls'); map.classList.toggle('dark'); map.classList.toggle('light', !map.classList.contains('dark'));"
      >
        🌓 Toggle Theme
      </button>
      <button
        class="custom-btn"
        slot="top-right"
        onclick="alert('Custom control clicked!')"
      >
        Alert
      </button>
      <button
        class="custom-btn custom-tool"
        slot="center-left"
        onclick="alert('Custom tool')"
      >
        🔧 Custom Button
      </button>
      <button
        class="custom-btn custom-tool"
        slot="center-left"
        onclick="alert('Another tool')"
      >
        🔧 Another one
      </button>
      <button
        class="custom-btn custom-slot-content"
        slot="top-center"
        style="width: 150px; cursor: default !important;"
      >
        🌍 Custom Slot Content
      </button>
    `,
    storyCodeAfter: `
const map = document.querySelector('eox-map#customized-controls');
map.addEventListener('resize', (e) => {
  const { isSmall } = e.detail;

  // Apply dynamic styling for touch targets via CSS Variables
  map.style.setProperty("--map-control-size", isSmall ? "44px" : "32px");
  map.style.setProperty("--map-control-font-size", isSmall ? "1.25rem" : "1rem");
  
  const controlsOverlay = map.shadowRoot.querySelector(".eox-map-controls-overlay");
  if (controlsOverlay) {
    controlsOverlay.style.padding = isSmall ? "4px" : "10px";
  }

  // Style updates for our custom story controls
  map.querySelectorAll(".custom-btn").forEach((btn) => {
    if (isSmall) {
      btn.style.height = "44px";
      btn.style.padding = "8px 16px";
      btn.style.fontSize = "14px";
      btn.style.borderRadius = "22px";
    } else {
      btn.style.height = "32px";
      btn.style.padding = "4px 8px";
      btn.style.fontSize = "12px";
      btn.style.borderRadius = "16px";
    }
  });

  // Toggle custom slot visibility
  const customSlotContent = map.querySelector(".custom-slot-content");
  if (customSlotContent) {
    customSlotContent.style.display = isSmall ? "none" : "block";
  }

  // Alter native controls based on breakpoint
  const controls = JSON.parse(JSON.stringify(map.controls));
  if (isSmall) {
    // Collapse the overview map
    if (controls.OverviewMap) controls.OverviewMap.collapsed = true;

    // Clean up state
    delete controls.Zoom;
    delete controls.GlobeSwitcher;
  } else {
    // Ensure correct desktop state
    if (!controls.Zoom) controls.Zoom = { position: "bottom-right", target: "zoom-hz", orientation: "horizontal" };
    if (!controls.GlobeSwitcher) controls.GlobeSwitcher = { position: "bottom-center", target: "bottom-tools", orientation: "horizontal" };
    if (controls.OverviewMap) controls.OverviewMap.collapsed = false;
  }

  map.controls = controls;
});
`,
    controls: {
      FullScreen: {
        position: "top-right",
        target: "fs-attribution",
        orientation: "vertical",
      },
      Attribution: {
        position: "bottom-right",
        target: "zoom-hz",
        orientation: "horizontal",
        collapsible: true,
      },
      Zoom: {
        position: "bottom-right",
        target: "zoom-hz",
        orientation: "horizontal",
      },
      Rotate: {
        position: "bottom-center",
        target: "bottom-tools",
        orientation: "horizontal",
      },
      GlobeSwitcher: {
        position: "bottom-center",
        target: "bottom-tools",
        orientation: "horizontal",
      },
      ScaleLine: { position: "bottom-left" },
      OverviewMap: {
        position: "top-left",
        collapsed: false,
        layers: [
          {
            type: "Tile",
            source: {
              type: "OSM",
            },
          },
        ],
      },
    },
    layers: [
      {
        type: "Tile",
        source: {
          type: "XYZ",
          // sentinel 2 cloudless layer by EOX
          url: "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",
          attributions: `<a xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2024) released under <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. For commercial usage please see <a href="https://cloudless.eox.at">https://cloudless.eox.at</a>`,
        },
      },
    ],
    // zoom to europe on initial load
    zoom: 4,
    center: [10, 50],
  },
  render: (args) => html`
    <style>
      ${args.storyStyle}
    </style>
    <eox-map
      id="customized-controls"
      .layers=${args.layers}
      .zoom=${args.zoom}
      .center=${args.center}
      .controls=${args.controls}
      @resize=${(e) => {
        const { isSmall } = e.detail;
        const map = e.target;

        // Apply dynamic styling for touch targets via CSS Variables
        map.style.setProperty("--map-control-size", isSmall ? "44px" : "32px");
        map.style.setProperty(
          "--map-control-font-size",
          isSmall ? "1.25rem" : "1rem",
        );
        map.shadowRoot.querySelector(
          ".eox-map-controls-overlay",
        ).style.padding = isSmall ? "4px" : "10px";

        // Style updates for our custom story controls
        map.querySelectorAll(".custom-btn").forEach((btn) => {
          if (isSmall) {
            btn.style.height = "44px";
            btn.style.padding = "8px 16px";
            btn.style.fontSize = "14px";
            btn.style.borderRadius = "22px";
          } else {
            btn.style.height = "32px";
            btn.style.padding = "4px 8px";
            btn.style.fontSize = "12px";
            btn.style.borderRadius = "16px";
          }
        });

        // Toggle custom slot visibility
        const customSlotContent = map.querySelector(".custom-slot-content");
        if (customSlotContent) {
          customSlotContent.style.display = isSmall ? "none" : "block";
        }

        // Alter native controls based on breakpoint
        const controls = JSON.parse(JSON.stringify(args.controls));
        if (isSmall) {
          // Collapse the overview map
          controls.OverviewMap.collapsed = true;

          // Clean up state
          delete controls.Zoom;
          delete controls.GlobeSwitcher;
        } else {
          // Ensure correct desktop state
          controls.OverviewMap.collapsed = false;
        }

        map.controls = controls;
      }}
    >
      ${unsafeHTML(args.storySlotContent)}
    </eox-map>
  `,
};

export default ControlsLayout;
