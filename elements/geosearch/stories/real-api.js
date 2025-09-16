import { html } from "lit";

// IMPORTANT: Replace YOUR_API_KEY with a real OpenCage API key
// Get one free at: https://opencagedata.com/api
const RealAPI = {
  args: {
    endpoint: "https://api.opencagedata.com/geocode/v1/json?key=YOUR_API_KEY",
    extent: "-125.0,24.0,-66.0,49.0", // North America extent
    tooltip: "Search within North America",
    tooltipDirection: "right",
  },
  render: (args) => {
    return html`
      <div style="padding: 20px;">
        <p style="margin-bottom: 20px;">
          ⚠️ To test with real API: Replace YOUR_API_KEY in the endpoint with your OpenCage API key
        </p>
        <eox-geosearch
          label="Search"
          button
          small
          style="position: absolute; top: 100px; left: 32px; z-index: 12;"
          .endpoint="${args.endpoint}"
          .extent="${args.extent}"
          .tooltip="${args.tooltip}"
          .tooltipDirection="${args.tooltipDirection}"
        ></eox-geosearch>

        <eox-map
          id="geosearch-map-real"
          .animationOptions=${{
            duration: 400,
            padding: [10, 10, 10, 10],
          }}
          .config=${{
            layers: [{ type: "Tile", source: { type: "OSM" } }],
            view: { center: [-95, 38], zoom: 4 },
          }}
          style="width: 100%; height: 500px; margin-top: 60px;"
        >
        </eox-map>
      </div>
    `;
  },
};

export default RealAPI;