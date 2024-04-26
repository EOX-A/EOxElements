const BASIC_TEXTUAL = `## What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

const BASIC_TABLE = `## Table <!--{ as="div" }-->
| Number | Random Name | Lorem Ipsum                                       |
|--------|-------------|---------------------------------------------------|
| 1      | Alice       | Lorem ipsum dolor sit amet, consectetur adipiscing |
| 2      | Bob         | elit. Sed do eiusmod tempor incididunt ut labore  |
| 3      | Charlie     | et dolore magna aliqua. Ut enim ad minim veniam,  |
| 4      | Dana        | quis nostrud exercitation ullamco laboris nisi ut |
| 5      | Eve         | aliquip ex ea commodo consequat. Duis aute irure  |
`;

const BASIC_LIST = `## List <!--{ as="div" }-->
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. **Sed do eiusmod tempor** incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
2. _Duis aute irure_ dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. **Excepteur sint occaecat cupidatat** non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
3. **Lorem ipsum dolor sit amet,** consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. _Ut enim ad minim veniam, quis nostrud exercitation ullamco_ laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. **Excepteur sint occaecat cupidatat** non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. _Lorem ipsum dolor sit amet, consectetur adipiscing elit._ Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
5. _Ut enim ad minim veniam, quis nostrud_ exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. **Duis aute irure dolor** in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
6. **Excepteur sint occaecat cupidatat** non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. _Lorem ipsum dolor sit amet, consectetur adipiscing elit._ Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

const SIMPLE_MAP = `## {title} <!--{as="eox-map" style="width: 100%; height: 500px;" layers='{layers}' zoom="{zoom}" center=[{longitude},{latitude}] }-->
`;
const SIMPLE_MAP_FIELDS = {
  title: "Simple Map",
  type: "object",
  required: ["title", "layers"],
  properties: {
    title: {
      type: "string",
      default: "EOx Map Example",
      format: "text",
    },
    layers: {
      type: "string",
      default: `[ { "type": "Tile", "properties": { "id": "TOPO-WMS" }, "source": { "type": "TileWMS", "url": "https://ows.mundialis.de/services/service", "params": { "LAYERS": "TOPO-WMS" } } } ]`,
      format: "textarea",
    },
    zoom: {
      type: "integer",
      default: 2,
      minimum: 1,
      maximum: 28,
      format: "number",
    },
    longitude: {
      type: "integer",
      default: 15,
      format: "number",
    },
    latitude: {
      type: "integer",
      default: 48,
      format: "number",
    },
  },
};

const MAP_TOUR = `## {title} <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='{layers}' center=[{longitude},{latitude}] zoom="{zoom}" }-->
#### {tourTitle}
{description}
`;
const MAP_TOUR_FIELDS = {
  title: "Tour",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      default: "EOX Map Tour Example",
      format: "text",
    },
    layers: {
      title: "Layers (Tour 1)",
      type: "string",
      default: `[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]`,
      format: "textarea",
    },
    zoom: {
      title: "Zoom (Tour 1)",
      type: "integer",
      default: 5,
      minimum: 1,
      maximum: 28,
      format: "number",
    },
    longitude: {
      title: "Longitude (Tour 1)",
      type: "integer",
      default: 15,
      format: "number",
    },
    latitude: {
      title: "Longitude (Tour 1)",
      type: "integer",
      default: 48,
      format: "number",
    },
    tourTitle: {
      title: "Title (Tour 1)",
      type: "string",
      default: "Tour Title",
      format: "text",
    },
    description: {
      title: "Description (Tour 1)",
      type: "string",
      default: "Some description for tour 1",
      format: "text",
    },
  },
};

const SIMPLE_IMG = `## {title} <!--{as="img" src="{src}" style="width: 100%; height: 600px;"}-->
`;
const SIMPLE_IMG_FIELDS = {
  title: "Simple Image",
  type: "object",
  required: ["title", "src"],
  properties: {
    title: {
      type: "string",
      default: "Simple Image Example",
      format: "text",
    },
    src: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1461880234904-751a2f54f1c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      format: "text",
    },
  },
};

const HERO_IMG = `# {title} <!--{ as="img" mode="hero" src="{src}" }-->
### {description} <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->
`;
const HERO_IMG_FIELDS = {
  title: "Hero Image",
  type: "object",
  required: ["title", "src"],
  properties: {
    title: {
      type: "string",
      default: "Hero Bg Image Example",
      format: "text",
    },
    src: {
      type: "string",
      default: "https://www.gstatic.com/prettyearth/assets/full/14617.jpg",
      format: "text",
    },
    description: {
      type: "string",
      default: "by EOX",
      format: "text",
    },
  },
};

const HERO_VIDEO = `# {title} <!--{ as="video" mode="hero" src="{src}" }-->
#### {description} <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->
`;
const HERO_VIDEO_FIELDS = {
  title: "Hero Image",
  type: "object",
  required: ["title", "src"],
  properties: {
    title: {
      type: "string",
      default: "Hero Bg Video Example",
      format: "text",
    },
    src: {
      type: "string",
      default:
        "https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4",
      format: "text",
    },
    description: {
      type: "string",
      default: "by EOX",
      format: "text",
    },
  },
};

export const SAMPLE_ELEMENTS = [
  {
    name: "Basic",
    elements: [
      {
        name: "Textual",
        id: "ele-textual",
        markdown: BASIC_TEXTUAL,
        icon: "data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 138 112' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23f7f7f7' rx='4' height='112' width='138'/%3E%3Crect x='27' y='22' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='27' y='34' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='27' y='46' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='27' y='58' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='27' y='70' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='27' y='82' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3C/svg%3E",
      },
      {
        name: "Table",
        id: "ele-table",
        markdown: BASIC_TABLE,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 137 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='137' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='26' y='22' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='26' y='34' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='26' y='46' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='26' y='58' width='84' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='26' y='73' width='84' height='14' rx='7' fill='%23D9D9D9'/%3E%3C/svg%3E%0A",
      },
      {
        name: "List",
        id: "ele-list",
        markdown: BASIC_LIST,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 138 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='138' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='38' y='22' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='38' y='34' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='38' y='46' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='38' y='58' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='38' y='70' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='38' y='82' width='73' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Ccircle cx='30.5' cy='25.5' r='3.5' fill='%23BFBFBF'/%3E%3Ccircle cx='30.5' cy='37.5' r='3.5' fill='%23BFBFBF'/%3E%3Ccircle cx='30.5' cy='49.5' r='3.5' fill='%23BFBFBF'/%3E%3Ccircle cx='30.5' cy='61.5' r='3.5' fill='%23BFBFBF'/%3E%3Ccircle cx='30.5' cy='73.5' r='3.5' fill='%23BFBFBF'/%3E%3Ccircle cx='30.5' cy='85.5' r='3.5' fill='%23BFBFBF'/%3E%3C/svg%3E%0A",
      },
    ],
  },
  {
    name: "Map",
    elements: [
      {
        name: "Simple Map",
        id: "ele-simple-map",
        markdown: SIMPLE_MAP,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 138 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='138' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='11' y='11' width='116' height='90' rx='4' fill='%23ebebeb'/%3E%3Cpath d='M54.08 42.873L56.58 52.373C57.83 57.123 65.08 59.373 69.58 59.373C73.18 59.373 74.7467 63.0397 75.08 64.873C74.08 68.0397 73.48 74.373 79.08 74.373C84.68 74.373 85.08 70.7064 84.58 68.873L80.58 59.373C78.2467 56.5397 73.58 49.473 73.58 43.873C73.58 38.2729 69.9134 37.873 68.08 38.373C64.08 42.373 60.4134 40.0397 59.08 38.373C54.28 36.773 53.7467 40.7063 54.08 42.873Z' fill='%235E5E5E'/%3E%3Cpath d='M59.0891 62.4676C58.5923 65.8092 60.2794 68.2359 61.5214 68.4348C66.4893 71.7763 70.4738 69.4293 71.5088 68.4348C72.9992 66.5253 71.7634 63.0643 70.5214 62.4676C68.5343 62.945 64.5564 63.661 63.5214 62.4676C62.031 60.5581 60.0214 60.4641 59.0891 62.4676Z' fill='%235E5E5E'/%3E%3C/svg%3E%0A",
        fields: SIMPLE_MAP_FIELDS,
      },
      {
        name: "Tour",
        id: "ele-map-tour",
        markdown: MAP_TOUR,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 138 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='138' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='27' y='22' width='84' height='67' rx='4' fill='%23ebebeb'/%3E%3Cpath d='M65.08 35.873L67.58 45.373C68.83 50.123 76.08 52.373 80.58 52.373C84.18 52.373 85.7467 56.0397 86.08 57.873C85.08 61.0397 84.48 67.373 90.08 67.373C95.68 67.373 96.08 63.7064 95.58 61.873L91.58 52.373C89.2467 49.5397 84.58 42.473 84.58 36.873C84.58 31.2729 80.9134 30.873 79.08 31.373C75.08 35.373 71.4134 33.0397 70.08 31.373C65.28 29.773 64.7467 33.7063 65.08 35.873Z' fill='%235E5E5E'/%3E%3Cpath d='M70.0891 55.4676C69.5923 58.8092 71.2794 61.2359 72.5214 61.4348C77.4893 64.7763 81.4738 62.4293 82.5088 61.4348C83.9992 59.5253 82.7634 56.0643 81.5214 55.4676C79.5343 55.945 75.5564 56.661 74.5214 55.4676C73.031 53.5581 71.0214 53.4641 70.0891 55.4676Z' fill='%235E5E5E'/%3E%3Crect x='34' y='67' width='26' height='16' rx='2' fill='%23f7f7f7'/%3E%3C/svg%3E%0A",
        fields: MAP_TOUR_FIELDS,
      },
    ],
  },
  {
    name: "Media",
    elements: [
      {
        name: "Simple",
        id: "ele-simple-media",
        markdown: SIMPLE_IMG,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 138 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='138' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='27' y='22' width='84' height='67' rx='4' fill='%23ebebeb'/%3E%3Cpath d='M69.5 39L73.2045 50.4012H85.1924L75.494 57.4476L79.1985 68.8488L69.5 61.8024L59.8015 68.8488L63.506 57.4476L53.8076 50.4012H65.7955L69.5 39Z' fill='%235E5E5E'/%3E%3C/svg%3E%0A",
        fields: SIMPLE_IMG_FIELDS,
      },
      {
        name: "Hero Image",
        id: "ele-hero-image",
        markdown: HERO_IMG,
        icon: "data:image/svg+xml,%3Csvg viewBox='0 0 138 112' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='138' height='112' rx='4' fill='%23f7f7f7'/%3E%3Crect x='11' y='11' width='116' height='90' rx='4' fill='%23ebebeb'/%3E%3Crect x='35' y='49' width='69' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='51' y='59' width='37' height='4' rx='2' fill='%23BEBEBE'/%3E%3C/svg%3E%0A",
        fields: HERO_IMG_FIELDS,
      },
      {
        name: "Hero Video",
        id: "ele-hero-video",
        markdown: HERO_VIDEO,
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 138 112' fill='none'%3E%3Crect width='138' height='112' rx='4' fill='%23F2F2F2'/%3E%3Crect x='11' y='11' width='116' height='90' rx='4' fill='%23D8D8D8'/%3E%3Crect x='35' y='49' width='69' height='7' rx='3.5' fill='%235E5E5E'/%3E%3Crect x='51' y='59' width='37' height='4' rx='2' fill='%23BEBEBE'/%3E%3Cline x1='20.6233' y1='87.6712' x2='75.6233' y2='24.6712' stroke='%235E5E5E' stroke-opacity='0.1'/%3E%3Cline x1='64.6233' y1='87.6712' x2='119.623' y2='24.6712' stroke='%235E5E5E' stroke-opacity='0.1'/%3E%3C/svg%3E",
        fields: HERO_VIDEO_FIELDS,
      },
    ],
  },
];
